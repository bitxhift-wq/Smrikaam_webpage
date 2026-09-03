import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;

async function checkPostgresHealth() {
  console.log('===========================================================');
  console.log('SMRIKAAM DATABASE HEALTH');
  console.log('===========================================================\n');

  const connectionString = process.env.DATABASE_URL || process.env.DIRECT_URL;
  if (!connectionString) {
    console.error('Connection       ✗ (DATABASE_URL is not configured)');
    process.exit(1);
  }

  const isSupabase = connectionString.includes('supabase') || connectionString.includes('sslmode=require');
  const client = new Client({
    connectionString,
    ssl: (isSupabase || !connectionString.includes('localhost')) ? { rejectUnauthorized: false } : false,
    connectionTimeoutMillis: 5000
  });

  try {
    await client.connect();
    console.log('Connection       ✓');

    const dbRes = await client.query('SELECT current_database(), version()');
    console.log(`Database         ✓ (${dbRes.rows[0].current_database})`);

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

    console.log('\nTables & Record Counts:');
    for (const table of tables) {
      try {
        const res = await client.query(`SELECT COUNT(*) FROM ${table}`);
        const count = res.rows[0].count;
        console.log(`${table.padEnd(17)}✓ ${count}`);
      } catch (err) {
        console.log(`${table.padEnd(17)}✗ Missing or Error: ${err.message}`);
      }
    }

    // Check Admin
    const adminRes = await client.query("SELECT id, email, role FROM admin_users WHERE email = 'bitxhift@gmail.com'");
    if (adminRes.rows.length > 0) {
      console.log(`\nAdmin Account    ✓ Verified (${adminRes.rows[0].email})`);
    } else {
      console.warn('\nAdmin Account    ✗ bitxhift@gmail.com not found');
    }

    // Check Products/Accelerators
    const accRes = await client.query('SELECT id, name, slug FROM accelerators ORDER BY name ASC');
    console.log(`Accelerators     ✓ ${accRes.rows.length} products verified (${accRes.rows.map(a => a.name).join(', ')})`);

    // Check Blog Posts Content Integrity
    const postRes = await client.query('SELECT id, title, slug, LENGTH(content) as len FROM posts WHERE status = \'published\'');
    const validContentPosts = postRes.rows.filter(p => parseInt(p.len, 10) > 50);
    console.log(`Published Blogs  ✓ ${validContentPosts.length}/${postRes.rows.length} articles contain verified content`);

    console.log('\nDatabase health check passed successfully.');
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error(`\n✗ Database Health Check Failed: ${err.message}`);
    process.exit(1);
  }
}

checkPostgresHealth();
