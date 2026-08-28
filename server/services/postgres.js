import pg from 'pg';
import dotenv from 'dotenv';
import { initialSeedData } from '../data/seedData.js';

dotenv.config();

const { Pool } = pg;

class PostgresService {
  constructor() {
    this.pool = null;
    this.isConnected = false;
    this.connectionError = null;
    this.init();
  }

  init() {
    const connectionString =
      process.env.DATABASE_URL ||
      `postgresql://${process.env.PGUSER || 'postgres'}:${process.env.PGPASSWORD || 'postgres'}@${process.env.PGHOST || 'localhost'}:${process.env.PGPORT || 5432}/${process.env.PGDATABASE || 'smrikaam_db'}`;

    try {
      this.pool = new Pool({
        connectionString,
        connectionTimeoutMillis: 3000,
        idleTimeoutMillis: 30000,
        max: 20
      });

      this.pool.on('error', (err) => {
        console.warn('PostgreSQL Pool background error:', err.message);
        this.isConnected = false;
      });

      // Try initial connection test
      this.testConnection();
    } catch (err) {
      this.connectionError = err.message;
      this.isConnected = false;
      console.warn('PostgreSQL Pool initialization warning:', err.message);
    }
  }

  async testConnection() {
    if (!this.pool) return false;
    try {
      const client = await this.pool.connect();
      const res = await client.query('SELECT NOW()');
      client.release();
      this.isConnected = true;
      this.connectionError = null;
      console.log('✓ PostgreSQL Database Connected Successfully at:', res.rows[0].now);
      
      // Auto run migrations and seeds
      await this.runMigrations();
      return true;
    } catch (err) {
      this.isConnected = false;
      this.connectionError = err.message;
      return false;
    }
  }

  async runMigrations() {
    if (!this.isConnected) return;
    try {
      await this.query(`
        CREATE TABLE IF NOT EXISTS admin_users (
          id VARCHAR(64) PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          role VARCHAR(64) DEFAULT 'superadmin',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS posts (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          category VARCHAR(255),
          excerpt TEXT,
          content TEXT NOT NULL,
          cover_image_url TEXT,
          tags JSONB DEFAULT '[]'::jsonb,
          author VARCHAR(255) DEFAULT 'SMRIKAAM Engineering Team',
          read_time VARCHAR(64) DEFAULT '5 min read',
          meta_title VARCHAR(500),
          meta_description TEXT,
          status VARCHAR(32) DEFAULT 'draft',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS services (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          num VARCHAR(16),
          tagline TEXT,
          summary TEXT,
          description TEXT NOT NULL,
          business_problems JSONB DEFAULT '[]'::jsonb,
          capabilities JSONB DEFAULT '[]'::jsonb,
          technology JSONB DEFAULT '[]'::jsonb,
          industry_applications JSONB DEFAULT '[]'::jsonb,
          problem_statement TEXT,
          solution_statement TEXT,
          outcomes TEXT,
          accelerator VARCHAR(255),
          case_study VARCHAR(255),
          cover_image_url TEXT,
          status VARCHAR(32) DEFAULT 'published',
          display_order INT DEFAULT 0,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS accelerators (
          id VARCHAR(64) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          category VARCHAR(255),
          tagline TEXT,
          short_description TEXT,
          full_description TEXT,
          cover_image_url TEXT,
          problem TEXT,
          solution TEXT,
          how_it_works TEXT,
          architecture TEXT,
          key_features JSONB DEFAULT '[]'::jsonb,
          technology JSONB DEFAULT '[]'::jsonb,
          use_cases JSONB DEFAULT '[]'::jsonb,
          business_outcomes TEXT,
          pdf_url TEXT,
          status VARCHAR(32) DEFAULT 'published',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS industries (
          id VARCHAR(64) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          summary TEXT,
          content TEXT NOT NULL,
          cover_image_url TEXT,
          business_problems JSONB DEFAULT '[]'::jsonb,
          solutions JSONB DEFAULT '[]'::jsonb,
          technology JSONB DEFAULT '[]'::jsonb,
          use_cases JSONB DEFAULT '[]'::jsonb,
          status VARCHAR(32) DEFAULT 'published',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS case_studies (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          client_name VARCHAR(255) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          industry VARCHAR(255),
          location VARCHAR(255),
          accelerator VARCHAR(255),
          related_service VARCHAR(255),
          challenge TEXT,
          solution TEXT,
          implementation TEXT,
          results TEXT,
          technologies JSONB DEFAULT '[]'::jsonb,
          cover_image_url TEXT,
          pdf_url TEXT,
          status VARCHAR(32) DEFAULT 'published',
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS reports (
          id VARCHAR(64) PRIMARY KEY,
          title VARCHAR(500) NOT NULL,
          slug VARCHAR(500) UNIQUE NOT NULL,
          date VARCHAR(64),
          type VARCHAR(64) DEFAULT 'FLASH',
          report_type VARCHAR(64) DEFAULT 'ENGINEERING // DISPATCH',
          status VARCHAR(32) DEFAULT 'published',
          summary TEXT,
          full_content TEXT,
          tags JSONB DEFAULT '[]'::jsonb,
          key_findings JSONB DEFAULT '[]'::jsonb,
          source_file VARCHAR(255),
          pdf_url TEXT,
          docx_url TEXT,
          featured BOOLEAN DEFAULT false,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          published_at TIMESTAMPTZ
        );

        CREATE TABLE IF NOT EXISTS media (
          id VARCHAR(64) PRIMARY KEY,
          filename VARCHAR(255) NOT NULL,
          original_name VARCHAR(255) NOT NULL,
          url TEXT NOT NULL,
          mime_type VARCHAR(128),
          size INT,
          uploaded_at TIMESTAMPTZ DEFAULT NOW(),
          metadata JSONB DEFAULT '{}'::jsonb
        );

        CREATE TABLE IF NOT EXISTS activity_logs (
          id VARCHAR(64) PRIMARY KEY,
          date VARCHAR(64),
          title TEXT NOT NULL,
          description TEXT,
          type VARCHAR(64) DEFAULT 'system',
          timestamp TIMESTAMPTZ DEFAULT NOW()
        );
      `);

      // Check if services table has rows, if not seed it
      const srvCheck = await this.query('SELECT count(*) FROM services');
      if (parseInt(srvCheck.rows[0].count, 10) === 0) {
        console.log('Seeding PostgreSQL services table with initial 10 services...');
        for (const s of initialSeedData.services) {
          await this.query(
            `INSERT INTO services (id, title, slug, num, tagline, summary, description, business_problems, capabilities, technology, industry_applications, problem_statement, solution_statement, outcomes, accelerator, case_study, cover_image_url, status, display_order, created_at, updated_at, published_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
             ON CONFLICT (id) DO NOTHING`,
            [
              s.id, s.title, s.slug, s.num, s.tagline, s.summary, s.description,
              JSON.stringify(s.businessProblems || []),
              JSON.stringify(s.capabilities || []),
              JSON.stringify(s.technology || []),
              JSON.stringify(s.industryApplications || []),
              s.problemStatement, s.solutionStatement, s.outcomes, s.accelerator, s.caseStudy,
              s.cover_image_url, s.status, s.display_order, s.created_at, s.updated_at, s.published_at
            ]
          );
        }
      }

      // Check if reports table has rows, if not seed it
      const repCheck = await this.query('SELECT count(*) FROM reports');
      if (parseInt(repCheck.rows[0].count, 10) === 0) {
        console.log('Seeding PostgreSQL reports table...');
        for (const r of initialSeedData.reports) {
          await this.query(
            `INSERT INTO reports (id, title, slug, date, type, report_type, status, summary, full_content, tags, key_findings, source_file, pdf_url, docx_url, featured, created_at, updated_at, published_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
             ON CONFLICT (id) DO NOTHING`,
            [
              r.id, r.title, r.slug, r.date, r.type, r.reportType, r.status, r.summary, r.fullContent,
              JSON.stringify(r.tags || []),
              JSON.stringify(r.keyFindings || []),
              r.sourceFile, r.pdfUrl, r.docxUrl, r.featured || false,
              r.created_at, r.updated_at, r.published_at
            ]
          );
        }
      }

      // Check if posts table has rows, if not seed it
      const postCheck = await this.query('SELECT count(*) FROM posts');
      if (parseInt(postCheck.rows[0].count, 10) === 0) {
        console.log('Seeding PostgreSQL posts table...');
        for (const p of initialSeedData.posts) {
          await this.query(
            `INSERT INTO posts (id, title, slug, category, excerpt, content, cover_image_url, tags, author, read_time, meta_title, meta_description, status, created_at, updated_at, published_at)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
             ON CONFLICT (id) DO NOTHING`,
            [
              p.id, p.title, p.slug, p.category, p.excerpt, p.content, p.cover_image_url,
              JSON.stringify(p.tags || []),
              p.author, p.read_time, p.meta_title, p.meta_description, p.status,
              p.created_at, p.updated_at, p.published_at
            ]
          );
        }
      }

      console.log('✓ PostgreSQL tables and seed migration complete.');
    } catch (err) {
      console.error('PostgreSQL migration error:', err.message);
    }
  }

  async query(text, params) {
    if (!this.pool) throw new Error('PostgreSQL Pool not initialized');
    return this.pool.query(text, params);
  }

  getStatus() {
    return {
      engine: 'PostgreSQL',
      connected: this.isConnected,
      host: process.env.PGHOST || 'localhost',
      port: process.env.PGPORT || 5432,
      database: process.env.PGDATABASE || 'smrikaam_db',
      error: this.connectionError
    };
  }
}

export const postgres = new PostgresService();
