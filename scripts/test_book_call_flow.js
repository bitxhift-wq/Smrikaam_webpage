import express from 'express';
import jwt from 'jsonwebtoken';
import { router as apiRouter } from '../server/routes/api.js';

const JWT_SECRET = process.env.JWT_SECRET || 'smrikaam_production_secure_jwt_secret_key_2026_x9k2m7';
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'bitxhift@gmail.com').toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AdminPassword2026!';

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

async function testSingleAdminAndBookCallFlow() {
  console.log('=== ACCEPTANCE TEST: SINGLE ADMIN AUTHENTICATION & BOOK-A-CALL FLOW ===');

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Server listening on ${baseUrl}...\n`);

    try {
      // STEP 1 & 2 & 3: Public User submits Book-a-Call request
      console.log('1. [Public Website] Visitor submits a Book-a-Call request...');
      const publicSubmissionPayload = {
        name: 'Sunita Narayanan',
        company: 'Apex Healthcare Cloud',
        email: 'sunita.n@apexhealth.io',
        phone: '+91 91234 56789',
        jobTitle: 'Director of Platform Engineering',
        service: 'Healthcare & Life Sciences',
        preferredDate: '2026-09-15',
        preferredTime: '02:00 PM - 04:00 PM',
        message: 'Require HIPAA-compliant cloud migration & FHIR integration for 12 regional hospitals.',
        source: 'Public Web Form'
      };

      const subRes = await fetch(`${baseUrl}/api/book-a-call`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(publicSubmissionPayload)
      });

      const subData = await subRes.json();
      console.log(`   Public Submission HTTP Status: ${subRes.status}`);
      console.log('   Public Submission Response:', subData);

      if (subRes.status !== 201 || !subData.id) {
        throw new Error('Public Book-a-Call submission failed.');
      }
      const createdId = subData.id;

      // STEP 4 & 14: Unauthenticated User Attempts Admin Data Access -> MUST FAIL (401)
      console.log('\n2. [Security Check] Unauthenticated user attempts to access GET /api/book-a-call...');
      const unauthRes = await fetch(`${baseUrl}/api/book-a-call`, { method: 'GET' });
      console.log(`   Unauthenticated HTTP Status: ${unauthRes.status} (Expected: 401)`);
      if (unauthRes.status !== 401) {
        throw new Error('Security Breach: Unauthenticated user accessed admin endpoint!');
      }

      // STEP 5 & 6: Invalid Email/Password Attempts -> MUST FAIL WITH GENERIC ERROR
      console.log('\n3. [Admin Auth] Testing invalid login credentials...');
      const invalidEmailRes = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'unauthorized_user@example.com', password: ADMIN_PASSWORD })
      });
      const invalidEmailData = await invalidEmailRes.json();
      console.log(`   Invalid Email HTTP Status: ${invalidEmailRes.status}`);
      console.log('   Invalid Email Response Error:', invalidEmailData.error);
      if (invalidEmailRes.status !== 401 || invalidEmailData.error !== 'Invalid email or password.') {
        throw new Error('Failed to return generic error for unauthorized email.');
      }

      const invalidPasswordRes = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: ADMIN_EMAIL, password: 'WrongPassword123!' })
      });
      const invalidPasswordData = await invalidPasswordRes.json();
      console.log(`   Invalid Password HTTP Status: ${invalidPasswordRes.status}`);
      console.log('   Invalid Password Response Error:', invalidPasswordData.error);
      if (invalidPasswordRes.status !== 401 || invalidPasswordData.error !== 'Invalid email or password.') {
        throw new Error('Failed to return generic error for incorrect password.');
      }

      // STEP 6: Single Admin Account Login -> SUCCESS
      console.log(`\n4. [Admin Auth] Logging in with SINGLE ADMIN ACCOUNT (${ADMIN_EMAIL})...`);
      const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
      });

      const loginData = await loginRes.json();
      console.log(`   Login HTTP Status: ${loginRes.status}`);
      console.log(`   User Info Returned:`, loginData.user);

      if (loginRes.status !== 200 || !loginData.token) {
        throw new Error('Admin login failed for single configured admin account.');
      }
      const adminToken = loginData.token;

      // STEP 7 & 8: Fetch Book-a-Call / Enquiries as Admin
      console.log('\n5. [Admin Panel] Fetching Book-a-Call submissions with JWT token...');
      const adminGetRes = await fetch(`${baseUrl}/api/book-a-call`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });

      const adminGetData = await adminGetRes.json();
      console.log(`   Admin Fetch HTTP Status: ${adminGetRes.status}`);
      console.log(`   Total Submissions in Database: ${adminGetData.length}`);

      const foundItem = adminGetData.find(item => item.id === createdId);
      if (!foundItem) {
        throw new Error(`Submitted request ${createdId} not found in Admin database.`);
      }
      console.log('   ✓ Found Newly Submitted Record:', {
        id: foundItem.id,
        name: foundItem.full_name,
        company: foundItem.company_name,
        email: foundItem.email,
        phone: foundItem.phone,
        service: foundItem.requirement_type,
        status: foundItem.status
      });

      // STEP 9 & 10 & 11: Update Status, Priority, and Admin Notes
      console.log('\n6. [Admin Panel] Updating lead status, priority, assigned lead, and admin notes...');
      const updatePayload = {
        status: 'QUALIFIED',
        priority: 'URGENT',
        assigned_to: 'Dr. Ananya Sharma — Cloud Architect Lead',
        admin_notes: 'Verified HIPAA compliance requirements. Proposal deck sent.'
      };

      const patchRes = await fetch(`${baseUrl}/api/book-a-call/${createdId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(updatePayload)
      });

      const patchData = await patchRes.json();
      console.log(`   Update HTTP Status: ${patchRes.status}`);
      console.log('   Updated Record Response:', patchData.item);

      // STEP 12 & 13: Confirm Persistence After Refresh / Re-query
      console.log('\n7. [Persistence Check] Re-fetching data to verify persistence...');
      const verifyRes = await fetch(`${baseUrl}/api/book-a-call`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      const verifyData = await verifyRes.json();
      const verifiedItem = verifyData.find(item => item.id === createdId);

      console.log('   ✓ Verified Persisted State:', {
        id: verifiedItem.id,
        status: verifiedItem.status,
        priority: verifiedItem.priority,
        assigned_to: verifiedItem.assigned_to,
        admin_notes: verifiedItem.admin_notes,
        updated_at: verifiedItem.updated_at
      });

      if (verifiedItem.status !== 'QUALIFIED' || verifiedItem.priority !== 'URGENT') {
        throw new Error('Updated status and priority failed to persist in database!');
      }

      console.log('\n===============================================================');
      console.log('✓ ALL 14 ACCEPTANCE TEST STEPS PASSED SUCCESSFULLY!');
      console.log('  ONE ADMIN ACCOUNT -> LOGIN -> DASHBOARD -> VIEW -> UPDATE -> PERSIST');
      console.log('===============================================================\n');

      server.close();
      process.exit(0);
    } catch (err) {
      console.error('\n❌ ACCEPTANCE TEST FAILED:', err.message);
      server.close();
      process.exit(1);
    }
  });
}

testSingleAdminAndBookCallFlow();
