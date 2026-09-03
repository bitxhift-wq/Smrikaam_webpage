import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';
import dotenv from 'dotenv';
import { initialSeedData } from '../server/data/seedData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Client } = pg;
const SCHEMA_PATH = path.resolve(__dirname, '../server/data/schema.sql');
const CMS_DB_PATH = path.resolve(__dirname, '../server/data/cms_db.json');

function safeJson(val) {
  if (val === undefined || val === null) return JSON.stringify([]);
  if (typeof val === 'string') {
    try {
      JSON.parse(val);
      return val;
    } catch {
      return JSON.stringify([val]);
    }
  }
  return JSON.stringify(val);
}

async function runMigration() {
  console.log('===========================================================');
  console.log('SMRIKAAM SUPABASE MIGRATION');
  console.log('===========================================================\n');

  // 1. Environment and Connection String Validation
  const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL;
  if (!connectionString) {
    console.error('SUPABASE DATABASE CONNECTION IS NOT CONFIGURED');
    console.error('DATABASE_URL is not configured.');
    process.exit(1);
  }

  console.log('DATABASE_URL: configured');

  const isSupabase = connectionString.includes('supabase') || connectionString.includes('sslmode=require');
  const client = new Client({
    connectionString,
    ssl: (isSupabase || !connectionString.includes('localhost')) ? { rejectUnauthorized: false } : false,
    connectionTimeoutMillis: 10000
  });

  try {
    await client.connect();
    console.log('✓ PostgreSQL connection successful');
  } catch (err) {
    console.error('✗ Database connection failed:', err.message);
    process.exit(1);
  }

  try {
    const dbRes = await client.query('SELECT current_database(), version()');
    console.log(`✓ Database detected: ${dbRes.rows[0].current_database}`);

    // 2. Read and Apply Schema safely (schema.sql)
    if (!fs.existsSync(SCHEMA_PATH)) {
      console.error(`✗ Schema file missing at ${SCHEMA_PATH}`);
      process.exit(1);
    }
    const schemaSql = fs.readFileSync(SCHEMA_PATH, 'utf8');
    console.log('✓ Schema loaded');

    // Execute schema DDL safely (CREATE TABLE IF NOT EXISTS / CREATE INDEX IF NOT EXISTS)
    await client.query(schemaSql);
    console.log('✓ Tables created/verified');
    console.log('✓ Indexes created/verified');

    // 3. Load Source Data
    let cmsData = {};
    if (fs.existsSync(CMS_DB_PATH)) {
      try {
        cmsData = JSON.parse(fs.readFileSync(CMS_DB_PATH, 'utf8'));
      } catch (err) {
        console.warn('! Warning: Could not parse cms_db.json, falling back to seedData.js');
      }
    }

    console.log('✓ Seed data processed\n');

    // 4. Safe Idempotent Seeding

    // 4.1 Admin Users (Single Admin Account: bitxhift@gmail.com)
    const adminList = initialSeedData.users || [];
    for (const u of adminList) {
      await client.query(
        `INSERT INTO admin_users (id, email, password_hash, name, role, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (id) DO UPDATE SET
           email = EXCLUDED.email,
           password_hash = EXCLUDED.password_hash,
           name = EXCLUDED.name,
           role = EXCLUDED.role,
           updated_at = NOW();`,
        [u.id, u.email, u.passwordHash, u.name, u.role || 'superadmin', u.created_at || new Date(), u.updated_at || new Date()]
      );
    }

    // 4.2 Posts (Blog Articles with Full Content Integrity)
    const postsMap = new Map();
    (initialSeedData.posts || []).forEach((p) => postsMap.set(p.id, p));
    (cmsData.posts || []).forEach((p) => {
      if (!postsMap.has(p.id) || (p.content && p.content.length > 50)) {
        postsMap.set(p.id, { ...(postsMap.get(p.id) || {}), ...p });
      }
    });

    for (const p of postsMap.values()) {
      const slug = p.slug || (p.title ? p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : p.id);
      await client.query(
        `INSERT INTO posts (id, title, slug, category, excerpt, content, cover_image_url, tags, author, read_time, meta_title, meta_description, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
         ON CONFLICT (id) DO UPDATE SET
           title = EXCLUDED.title,
           slug = EXCLUDED.slug,
           category = EXCLUDED.category,
           excerpt = EXCLUDED.excerpt,
           content = EXCLUDED.content,
           cover_image_url = EXCLUDED.cover_image_url,
           tags = EXCLUDED.tags,
           author = EXCLUDED.author,
           status = EXCLUDED.status,
           updated_at = NOW();`,
        [
          p.id, p.title, slug, p.category, p.excerpt, p.content, p.cover_image_url,
          safeJson(p.tags), p.author || 'SMRIKAAM Engineering Team', p.read_time || '5 min read',
          p.meta_title || p.title, p.meta_description || p.excerpt,
          p.status || 'published', p.created_at || new Date(), p.updated_at || new Date(), p.published_at || new Date()
        ]
      );
    }

    // 4.3 Services (10 Canonical Offerings)
    // Avoid transient unique constraint collisions during slug migration
    await client.query("UPDATE services SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const servicesList = initialSeedData.services || [];
    for (const s of servicesList) {
      await client.query(
        `INSERT INTO services (id, title, slug, num, tagline, summary, description, business_problems, capabilities, technology, industry_applications, problem_statement, solution_statement, outcomes, accelerator, case_study, cover_image_url, status, display_order, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
         ON CONFLICT (id) DO UPDATE SET
           title = EXCLUDED.title,
           slug = EXCLUDED.slug,
           num = EXCLUDED.num,
           tagline = EXCLUDED.tagline,
           summary = EXCLUDED.summary,
           description = EXCLUDED.description,
           business_problems = EXCLUDED.business_problems,
           capabilities = EXCLUDED.capabilities,
           technology = EXCLUDED.technology,
           industry_applications = EXCLUDED.industry_applications,
           problem_statement = EXCLUDED.problem_statement,
           solution_statement = EXCLUDED.solution_statement,
           outcomes = EXCLUDED.outcomes,
           accelerator = EXCLUDED.accelerator,
           case_study = EXCLUDED.case_study,
           cover_image_url = EXCLUDED.cover_image_url,
           status = EXCLUDED.status,
           display_order = EXCLUDED.display_order,
           updated_at = NOW();`,
        [
          s.id, s.title, s.slug, s.num, s.tagline, s.summary, s.description,
          safeJson(s.businessProblems || s.business_problems),
          safeJson(s.capabilities),
          safeJson(s.technology),
          safeJson(s.industryApplications || s.industry_applications),
          s.problemStatement || s.problem_statement,
          s.solutionStatement || s.solution_statement,
          s.outcomes, s.accelerator, s.caseStudy || s.case_study,
          s.cover_image_url, s.status || 'published', s.display_order || parseInt(s.num, 10) || 0,
          s.created_at || new Date(), s.updated_at || new Date(), s.published_at || new Date()
        ]
      );
    }

    // 4.4 Accelerators (4 Canonical Offerings: BitXhift, MigrateMax, ParseMaster, LinkGenX)
    await client.query("UPDATE accelerators SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const accList = initialSeedData.accelerators || [];
    for (const a of accList) {
      await client.query(
        `INSERT INTO accelerators (id, name, slug, category, tagline, short_description, full_description, cover_image_url, problem, solution, how_it_works, architecture, key_features, technology, use_cases, business_outcomes, pdf_url, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
         ON CONFLICT (id) DO UPDATE SET
           name = EXCLUDED.name,
           slug = EXCLUDED.slug,
           category = EXCLUDED.category,
           tagline = EXCLUDED.tagline,
           short_description = EXCLUDED.short_description,
           full_description = EXCLUDED.full_description,
           cover_image_url = EXCLUDED.cover_image_url,
           key_features = EXCLUDED.key_features,
           technology = EXCLUDED.technology,
           status = EXCLUDED.status,
           updated_at = NOW();`,
        [
          a.id, a.name, a.slug, a.category, a.tagline, a.short_description, a.full_description,
          a.cover_image_url, a.problem, a.solution, a.how_it_works, a.architecture,
          safeJson(a.key_features || a.features),
          safeJson(a.technology),
          safeJson(a.use_cases),
          a.business_outcomes, a.pdf_url, a.status || 'published',
          a.created_at || new Date(), a.updated_at || new Date(), a.published_at || new Date()
        ]
      );
    }

    // 4.5 Industries (6 Sectors)
    await client.query("UPDATE industries SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const indList = initialSeedData.industries || [];
    for (const ind of indList) {
      await client.query(
        `INSERT INTO industries (id, name, slug, summary, content, cover_image_url, business_problems, solutions, technology, use_cases, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
         ON CONFLICT (id) DO UPDATE SET
           name = EXCLUDED.name,
           slug = EXCLUDED.slug,
           summary = EXCLUDED.summary,
           content = EXCLUDED.content,
           cover_image_url = EXCLUDED.cover_image_url,
           business_problems = EXCLUDED.business_problems,
           solutions = EXCLUDED.solutions,
           technology = EXCLUDED.technology,
           use_cases = EXCLUDED.use_cases,
           status = EXCLUDED.status,
           updated_at = NOW();`,
        [
          ind.id, ind.name, ind.slug, ind.summary, ind.content, ind.cover_image_url,
          safeJson(ind.business_problems || ind.businessProblems),
          safeJson(ind.solutions),
          safeJson(ind.technology),
          safeJson(ind.use_cases || ind.useCases),
          ind.status || 'published',
          ind.created_at || new Date(), ind.updated_at || new Date(), ind.published_at || new Date()
        ]
      );
    }

    // 4.6 Case Studies (5 Studies)
    await client.query("UPDATE case_studies SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const csList = initialSeedData.case_studies || [];
    for (const cs of csList) {
      await client.query(
        `INSERT INTO case_studies (id, title, client_name, slug, industry, location, accelerator, related_service, challenge, solution, implementation, results, technologies, cover_image_url, pdf_url, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
         ON CONFLICT (id) DO UPDATE SET
           title = EXCLUDED.title,
           client_name = EXCLUDED.client_name,
           slug = EXCLUDED.slug,
           industry = EXCLUDED.industry,
           challenge = EXCLUDED.challenge,
           solution = EXCLUDED.solution,
           results = EXCLUDED.results,
           technologies = EXCLUDED.technologies,
           cover_image_url = EXCLUDED.cover_image_url,
           status = EXCLUDED.status,
           updated_at = NOW();`,
        [
          cs.id, cs.title, cs.client_name || cs.client || 'Enterprise Client', cs.slug,
          cs.industry, cs.location, cs.accelerator, cs.related_service || cs.relatedService,
          cs.challenge, cs.solution, cs.implementation, cs.results,
          safeJson(cs.technologies), cs.cover_image_url, cs.pdf_url,
          cs.status || 'published', cs.created_at || new Date(), cs.updated_at || new Date(), cs.published_at || new Date()
        ]
      );
    }

    // 4.7 Reports (3 Reports)
    await client.query("UPDATE reports SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const repList = initialSeedData.reports || [];
    for (const rep of repList) {
      const slug = (rep.slug || rep.title || rep.id).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      await client.query(
        `INSERT INTO reports (id, title, slug, date, type, report_type, status, summary, full_content, tags, key_findings, source_file, pdf_url, docx_url, featured, category, problem_statement, solution_statement, cover_image_url, related_content, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
         ON CONFLICT (id) DO UPDATE SET
           title = EXCLUDED.title,
           slug = EXCLUDED.slug,
           date = EXCLUDED.date,
           type = EXCLUDED.type,
           report_type = EXCLUDED.report_type,
           status = EXCLUDED.status,
           summary = EXCLUDED.summary,
           full_content = EXCLUDED.full_content,
           category = EXCLUDED.category,
           problem_statement = EXCLUDED.problem_statement,
           solution_statement = EXCLUDED.solution_statement,
           cover_image_url = EXCLUDED.cover_image_url,
           related_content = EXCLUDED.related_content,
           updated_at = NOW();`,
        [
          rep.id, rep.title, slug, rep.date, rep.type || 'FLASH', rep.reportType || rep.report_type || 'ENGINEERING // DISPATCH',
          rep.status || 'published', rep.summary || rep.problemStatement || '', rep.full_content || rep.solutionStatement || '',
          safeJson(rep.tags || rep.techStack), safeJson(rep.key_findings),
          rep.source_file, rep.pdf_url, rep.docx_url, rep.featured || false,
          rep.category || '', rep.problemStatement || rep.problem_statement || '',
          rep.solutionStatement || rep.solution_statement || '', rep.cover_image_url || '',
          rep.relatedContent || rep.related_content || '',
          rep.created_at || new Date(), rep.updated_at || new Date(), rep.published_at || new Date()
        ]
      );
    }

    // 4.8 Staffing Models
    await client.query("UPDATE staffing SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const staffList = initialSeedData.staffing || [];
    for (const st of staffList) {
      await client.query(
        `INSERT INTO staffing (id, title, slug, subtitle, "desc", bullets, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         ON CONFLICT (id) DO UPDATE SET
           title = EXCLUDED.title,
           slug = EXCLUDED.slug,
           subtitle = EXCLUDED.subtitle,
           "desc" = EXCLUDED."desc",
           bullets = EXCLUDED.bullets,
           status = EXCLUDED.status,
           updated_at = NOW();`,
        [
          st.id, st.title, st.slug, st.subtitle || '', st.desc || st.description || '',
          safeJson(st.bullets), st.status || 'published',
          st.created_at || new Date(), st.updated_at || new Date(), st.published_at || new Date()
        ]
      );
    }

    // 4.9 Locations
    await client.query("UPDATE locations SET slug = id || '_tmp' WHERE slug NOT LIKE '%_tmp'");

    const locList = initialSeedData.locations || [];
    for (const loc of locList) {
      await client.query(
        `INSERT INTO locations (id, name, slug, type, address, email, phone, description, capabilities, status, created_at, updated_at, published_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         ON CONFLICT (id) DO UPDATE SET
           name = EXCLUDED.name,
           slug = EXCLUDED.slug,
           address = EXCLUDED.address,
           email = EXCLUDED.email,
           phone = EXCLUDED.phone,
           status = EXCLUDED.status,
           updated_at = NOW();`,
        [
          loc.id, loc.name, loc.slug, loc.type || 'Office', loc.address, loc.email, loc.phone,
          loc.description, safeJson(loc.capabilities), loc.status || 'published',
          loc.created_at || new Date(), loc.updated_at || new Date(), loc.published_at || new Date()
        ]
      );
    }

    // 4.10 Settings
    const settingsVal = cmsData.settings || initialSeedData.settings || {
      siteName: 'SMRIKAAM Technologies',
      brandSubtitle: 'Progress Through Innovation',
      contactEmail: 'contact@smrikaam.com',
      contactPhone: '+91 (0) 422 123 4567'
    };
    await client.query(
      `INSERT INTO settings (key, value, updated_at)
       VALUES ('site_settings', $1, NOW())
       ON CONFLICT (key) DO UPDATE SET
         value = EXCLUDED.value,
         updated_at = NOW();`,
      [safeJson(settingsVal)]
    );

    // 4.11 Engagements / Book a Call
    if (Array.isArray(cmsData.engagements)) {
      for (const eng of cmsData.engagements) {
        await client.query(
          `INSERT INTO engagements (id, full_name, company_name, email, phone, job_title, requirement_type, message, preferred_date, preferred_time, source, status, priority, assigned_to, admin_notes, is_read, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
           ON CONFLICT (id) DO NOTHING;`,
          [
            eng.id, eng.full_name || eng.name, eng.company_name || eng.company || '', eng.email,
            eng.phone || '', eng.job_title || eng.jobTitle || '', eng.requirement_type || eng.service || 'Technology Transformation',
            eng.message || '', eng.preferred_date || eng.preferredDate || '', eng.preferred_time || eng.preferredTime || '',
            eng.source || 'Book a Call Form', eng.status || 'NEW', eng.priority || 'MEDIUM',
            eng.assigned_to || '', eng.admin_notes || '', eng.is_read || false,
            eng.created_at || new Date(), eng.updated_at || new Date()
          ]
        );
      }
    }

    // 5. Verification & Summary Output
    const tables = [
      'admin_users',
      'posts',
      'services',
      'accelerators',
      'industries',
      'case_studies',
      'reports',
      'media',
      'activity_logs',
      'staffing',
      'locations',
      'settings',
      'engagements'
    ];

    console.log('Tables:');
    for (const t of tables) {
      console.log(`✓ ${t}`);
    }

    console.log('\nSeed:');
    console.log('✓ Admin user');
    console.log('✓ Blog posts');
    console.log('✓ Services');
    console.log('✓ Accelerators');
    console.log('✓ Industries');
    console.log('✓ Case studies');
    console.log('✓ Reports');
    console.log('✓ Staffing');
    console.log('✓ Locations');
    console.log('✓ Settings');
    console.log('✓ Engagements\n');

    // Display Table Row Counts
    console.log('-----------------------------------------------------------');
    console.log('DATABASE ROW COUNTS & VERIFICATION');
    console.log('-----------------------------------------------------------');
    for (const t of tables) {
      const cnt = await client.query(`SELECT COUNT(*) FROM ${t}`);
      console.log(`${t.padEnd(16)}: ${cnt.rows[0].count} rows`);
    }

    // Verify Admin User
    const adminCheck = await client.query('SELECT id, email, role FROM admin_users');
    console.log('\nAdmin Accounts:');
    adminCheck.rows.forEach(r => console.log(`  - [${r.role}] ${r.email} (ID: ${r.id})`));

    // Verify Blog Posts Content Length
    const postCheck = await client.query('SELECT id, title, slug, status, LENGTH(content) AS content_len FROM posts ORDER BY created_at DESC');
    console.log('\nPublished Blog Posts & Content Integrity:');
    postCheck.rows.forEach(r => {
      console.log(`  - [${r.status}] "${r.title.slice(0, 50)}..." (slug: ${r.slug}) | Content: ${r.content_len} chars`);
    });

    console.log('\nMigration completed successfully.');
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('\n✗ Migration failed with error:', err);
    await client.end();
    process.exit(1);
  }
}

runMigration();
