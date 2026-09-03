import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Client } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Standard Canonical Image Map - Target 4 Services Updated per User Request
const canonicalImageMap = {
  // Services
  srv_01: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop", // AI & ML
  srv_02: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", // IIoT
  srv_03: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // Enterprise Data Engineering
  srv_04: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", // Generative AI & LLM Systems
  srv_05: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", // DevOps & Cloud Infrastructure
  srv_06: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop", // Data Governance
  srv_07: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop", // Integration Services
  srv_08: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop", // ServiceNow
  srv_09: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", // Technology Advisory
  srv_10: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop", // Intelligent AI Workflow Automation

  // Products
  prod_01: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop", // BitXhift
  prod_02: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop", // ParseMaster
  prod_03: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop", // LinkGenX
  prod_04: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", // DataMesh

  // Industries
  ind_01: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", // Manufacturing
  ind_02: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop", // Energy & Utilities
  ind_03: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop", // Retail
  ind_04: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop", // BFSI
  ind_05: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop", // Healthcare
  ind_06: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", // Logistics
  ind_07: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop", // Telecom
  ind_08: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", // Infrastructure
  ind_09: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop", // Oil & Gas
  ind_10: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop", // Media
  ind_11: "https://images.unsplash.com/photo-1517055729445-fa7d27394b48?q=80&w=1200&auto=format&fit=crop", // Electrical

  // Case Studies
  cs_01: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop", // Smart Factory Manufacturing
  cs_02: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", // Lakehouse Migration
  cs_03: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop", // Patient Data Ingestion
  cs_04: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop", // Fraud Detection
  cs_05: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop", // Logistics Control Tower

  // Blogs
  post_01: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
  post_02: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  post_03: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
};

async function updateCMSJson() {
  const cmsPath = path.resolve(__dirname, '../server/data/cms_db.json');
  if (!fs.existsSync(cmsPath)) return;

  console.log('Updating server/data/cms_db.json image URLs...');
  const data = JSON.parse(fs.readFileSync(cmsPath, 'utf8'));

  if (Array.isArray(data.services)) {
    data.services.forEach(srv => {
      if (canonicalImageMap[srv.id]) srv.cover_image_url = canonicalImageMap[srv.id];
    });
  }

  if (Array.isArray(data.products)) {
    data.products.forEach(prod => {
      if (canonicalImageMap[prod.id]) prod.cover_image_url = canonicalImageMap[prod.id];
    });
  }

  if (Array.isArray(data.industries)) {
    data.industries.forEach(ind => {
      if (canonicalImageMap[ind.id]) ind.cover_image_url = canonicalImageMap[ind.id];
    });
  }

  if (Array.isArray(data.caseStudies)) {
    data.caseStudies.forEach(cs => {
      if (canonicalImageMap[cs.id]) cs.cover_image_url = canonicalImageMap[cs.id];
    });
  }

  if (Array.isArray(data.posts)) {
    data.posts.forEach(post => {
      if (canonicalImageMap[post.id]) post.cover_image_url = canonicalImageMap[post.id];
    });
  }

  fs.writeFileSync(cmsPath, JSON.stringify(data, null, 2), 'utf8');
  console.log('✓ Successfully updated cms_db.json');
}

async function updateDatabase() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.log('DATABASE_URL not set. Skipping PostgreSQL DB update.');
    return;
  }

  console.log('Connecting to PostgreSQL database...');
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('✓ Connected to PostgreSQL DB');

    for (const [id, url] of Object.entries(canonicalImageMap)) {
      if (id.startsWith('srv_')) {
        await client.query('UPDATE services SET cover_image_url = $1 WHERE id = $2', [url, id]);
      } else if (id.startsWith('ind_')) {
        await client.query('UPDATE industries SET cover_image_url = $1 WHERE id = $2', [url, id]);
      } else if (id.startsWith('cs_')) {
        await client.query('UPDATE case_studies SET cover_image_url = $1 WHERE id = $2', [url, id]);
      } else if (id.startsWith('post_')) {
        await client.query('UPDATE posts SET cover_image_url = $1 WHERE id = $2', [url, id]);
      }
    }

    console.log('✓ Successfully updated PostgreSQL database tables with canonical image URLs');
  } catch (err) {
    console.error('Error updating PostgreSQL database:', err.message);
  } finally {
    await client.end();
  }
}

async function main() {
  await updateCMSJson();
  await updateDatabase();
}

main().catch(err => console.error(err));
