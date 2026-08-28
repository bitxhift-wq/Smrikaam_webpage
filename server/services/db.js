import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initialSeedData } from '../data/seedData.js';
import { postgres } from './postgres.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, '../data');
const DB_FILE = path.join(DATA_DIR, 'cms_db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

class Database {
  constructor() {
    this.data = null;
    this.init();
  }

  init() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf8');
        this.data = JSON.parse(raw);
      } else {
        this.data = JSON.parse(JSON.stringify(initialSeedData));
        this.save();
      }
    } catch (err) {
      console.error('Error initializing database, using seed data:', err);
      this.data = JSON.parse(JSON.stringify(initialSeedData));
      this.save();
    }
  }

  save() {
    try {
      const tmpFile = `${DB_FILE}.tmp`;
      fs.writeFileSync(tmpFile, JSON.stringify(this.data, null, 2), 'utf8');
      fs.renameSync(tmpFile, DB_FILE);
    } catch (err) {
      console.error('Error persisting local database snapshot:', err);
    }
  }

  getCollection(name) {
    if (!this.data[name]) {
      this.data[name] = [];
    }
    return this.data[name];
  }

  logActivity(title, description, type = 'system') {
    const logs = this.getCollection('activityLogs');
    const now = new Date();
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const dateStr = `${now.getDate()} ${monthNames[now.getMonth()]}`;

    const newLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      date: dateStr,
      title,
      description,
      type,
      timestamp: now.toISOString()
    };

    logs.unshift(newLog);
    // Keep max 100 logs
    if (logs.length > 100) logs.pop();
    this.save();

    // Async write to Postgres if connected
    if (postgres.isConnected) {
      postgres
        .query(
          'INSERT INTO activity_logs (id, date, title, description, type, timestamp) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO NOTHING',
          [newLog.id, newLog.date, newLog.title, newLog.description, newLog.type, newLog.timestamp]
        )
        .catch((err) => console.warn('Postgres logActivity write warning:', err.message));
    }
  }

  getAll(collectionName, { status, search, category, type, limit, sort = 'newest' } = {}) {
    let items = [...this.getCollection(collectionName)];

    // Status filter
    if (status && status !== 'all') {
      items = items.filter((item) => item.status === status);
    }

    // Category filter
    if (category) {
      items = items.filter(
        (item) =>
          (item.category && item.category.toLowerCase() === category.toLowerCase()) ||
          (item.category_id && item.category_id.toLowerCase() === category.toLowerCase())
      );
    }

    // Report Type filter
    if (type) {
      items = items.filter((item) => item.reportType && item.reportType.toLowerCase() === type.toLowerCase());
    }

    // Full text search
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter((item) => {
        const title = (item.title || item.name || '').toLowerCase();
        const desc = (item.description || item.excerpt || item.summary || item.shortDescription || item.problemStatement || '').toLowerCase();
        const slug = (item.slug || '').toLowerCase();
        return title.includes(q) || desc.includes(q) || slug.includes(q);
      });
    }

    // Sorting
    items.sort((a, b) => {
      // For reports, use custom date if present
      const dateA = new Date(a.date || a.published_at || a.updated_at || a.created_at || 0).getTime();
      const dateB = new Date(b.date || b.published_at || b.updated_at || b.created_at || 0).getTime();
      return sort === 'oldest' ? dateA - dateB : dateB - dateA;
    });

    if (limit && limit > 0) {
      items = items.slice(0, limit);
    }

    return items;
  }

  getById(collectionName, id) {
    const items = this.getCollection(collectionName);
    return items.find((item) => String(item.id) === String(id)) || null;
  }

  getBySlug(collectionName, slug) {
    const items = this.getCollection(collectionName);
    return items.find((item) => item.slug === slug) || null;
  }

  create(collectionName, data, user = null) {
    const items = this.getCollection(collectionName);
    const id = data.id || `${collectionName.slice(0, 3)}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    const now = new Date().toISOString();

    const newItem = {
      ...data,
      id,
      created_at: now,
      updated_at: now,
      published_at: data.status === 'published' ? (data.published_at || now) : null
    };

    items.unshift(newItem);
    this.save();

    const title = newItem.title || newItem.name || 'New Item';
    this.logActivity(`Created ${collectionName.slice(0, -1)}: "${title}"`, `Status: ${newItem.status || 'draft'} by ${user?.name || 'Admin'}`, `${collectionName}_create`);

    return newItem;
  }

  update(collectionName, id, data, user = null) {
    const items = this.getCollection(collectionName);
    const index = items.findIndex((item) => String(item.id) === String(id));
    if (index === -1) return null;

    const existing = items[index];
    const now = new Date().toISOString();

    const wasPublished = existing.status === 'published';
    const isNowPublished = data.status === 'published';

    const updatedItem = {
      ...existing,
      ...data,
      id: existing.id, // Preserve ID
      updated_at: now,
      published_at: isNowPublished && !existing.published_at ? now : (data.published_at || existing.published_at)
    };

    items[index] = updatedItem;
    this.save();

    const title = updatedItem.title || updatedItem.name || 'Item';
    if (!wasPublished && isNowPublished) {
      this.logActivity(`Published ${collectionName.slice(0, -1)}: "${title}"`, `Published by ${user?.name || 'Admin'}`, `${collectionName}_publish`);
    } else {
      this.logActivity(`Updated ${collectionName.slice(0, -1)}: "${title}"`, `Updated by ${user?.name || 'Admin'}`, `${collectionName}_update`);
    }

    return updatedItem;
  }

  updateStatus(collectionName, id, status, user = null) {
    const items = this.getCollection(collectionName);
    const item = items.find((i) => String(i.id) === String(id));
    if (!item) return null;

    const now = new Date().toISOString();
    item.status = status;
    item.updated_at = now;
    if (status === 'published' && !item.published_at) {
      item.published_at = now;
    }

    this.save();
    const title = item.title || item.name || 'Item';
    this.logActivity(`Status changed to ${status} for "${title}"`, `Updated by ${user?.name || 'Admin'}`, `${collectionName}_status`);

    return item;
  }

  delete(collectionName, id, user = null, permanent = false) {
    const items = this.getCollection(collectionName);
    const index = items.findIndex((item) => String(item.id) === String(id));
    if (index === -1) return false;

    const item = items[index];
    const title = item.title || item.name || 'Item';

    if (permanent || item.status === 'trash') {
      // Permanently remove
      items.splice(index, 1);
      this.save();
      this.logActivity(`Permanently deleted "${title}"`, `Deleted by ${user?.name || 'Admin'}`, `${collectionName}_delete_permanent`);
    } else {
      // Soft delete -> move to trash
      item.status = 'trash';
      item.updated_at = new Date().toISOString();
      this.save();
      this.logActivity(`Moved "${title}" to Trash`, `Moved to trash by ${user?.name || 'Admin'}`, `${collectionName}_trash`);
    }

    return true;
  }

  restore(collectionName, id, user = null) {
    const items = this.getCollection(collectionName);
    const item = items.find((i) => String(i.id) === String(id));
    if (!item) return null;

    item.status = 'draft';
    item.updated_at = new Date().toISOString();
    this.save();

    const title = item.title || item.name || 'Item';
    this.logActivity(`Restored "${title}" from Trash`, `Restored by ${user?.name || 'Admin'}`, `${collectionName}_restore`);

    return item;
  }

  bulkAction(collectionName, ids, action, user = null) {
    const items = this.getCollection(collectionName);
    let count = 0;
    const now = new Date().toISOString();

    ids.forEach((id) => {
      const item = items.find((i) => String(i.id) === String(id));
      if (item) {
        count++;
        if (action === 'publish') {
          item.status = 'published';
          if (!item.published_at) item.published_at = now;
          item.updated_at = now;
        } else if (action === 'unpublish') {
          item.status = 'draft';
          item.updated_at = now;
        } else if (action === 'trash') {
          item.status = 'trash';
          item.updated_at = now;
        } else if (action === 'restore') {
          item.status = 'draft';
          item.updated_at = now;
        }
      }
    });

    if (count > 0) {
      this.save();
      this.logActivity(`Bulk ${action} executed on ${count} ${collectionName}`, `Executed by ${user?.name || 'Admin'}`, `${collectionName}_bulk`);
    }

    return count;
  }

  getStats() {
    const collections = ['posts', 'services', 'accelerators', 'industries', 'caseStudies', 'reports', 'media'];
    const stats = {
      totalPosts: this.getCollection('posts').filter((i) => i.status !== 'trash').length,
      totalServices: this.getCollection('services').filter((i) => i.status !== 'trash').length,
      totalAccelerators: this.getCollection('accelerators').filter((i) => i.status !== 'trash').length,
      totalIndustries: this.getCollection('industries').filter((i) => i.status !== 'trash').length,
      totalCaseStudies: this.getCollection('caseStudies').filter((i) => i.status !== 'trash').length,
      totalReports: this.getCollection('reports').filter((i) => i.status !== 'trash').length,
      totalMedia: this.getCollection('media').length,
      published: 0,
      drafts: 0,
      trash: 0,
      postgresStatus: postgres.getStatus()
    };

    collections.forEach((col) => {
      if (col === 'media') return;
      const items = this.getCollection(col);
      items.forEach((item) => {
        if (item.status === 'published') stats.published++;
        else if (item.status === 'draft') stats.drafts++;
        else if (item.status === 'trash') stats.trash++;
      });
    });

    return stats;
  }
}

export const db = new Database();
export { postgres };
