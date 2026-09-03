import express from 'express';
import jwt from 'jsonwebtoken';
import { router as apiRouter } from '../server/routes/api.js';

const JWT_SECRET = process.env.JWT_SECRET || 'smrikaam_production_secure_jwt_secret_key_2026_x9k2m7';
const adminToken = jwt.sign({ userId: 'usr_admin_01', email: 'admin@smrikaam.com', role: 'superadmin' }, JWT_SECRET, { expiresIn: '1h' });

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

async function testDirectFlow() {
  console.log('--- TESTING BOOK A CALL END-TO-END FLOW (WITH VALID JWT AUTH) ---');

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Server listening on port ${port}...`);

    try {
      // Test 1: Public Submission
      const testPayload = {
        name: 'Vikram Malhotra',
        company: 'Titan Manufacturing Corp',
        email: 'vikram.m@titanmfg.in',
        phone: '+91 98765 12345',
        jobTitle: 'VP Operations',
        service: 'Industrial IoT (IIoT)',
        preferredDate: '2026-09-10',
        preferredTime: '11:00 AM - 01:00 PM',
        message: 'We operate 450 CNC machining centers in Hosur and need real-time edge telemetry and OEE tracking.',
        source: 'E2E Test Script'
      };

      console.log('\n1. Submitting public Book a Call request to POST /api/book-a-call...');
      const subRes = await fetch(`http://localhost:${port}/api/book-a-call`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testPayload)
      });

      const subData = await subRes.json();
      console.log(`   Response Status: ${subRes.status}`);
      console.log('   Response Data:', subData);

      if (subRes.status !== 201 || !subData.id) {
        console.error('FAILED: Could not create book a call submission.');
        server.close();
        process.exit(1);
      }

      const createdId = subData.id;

      // Test 2: Admin Fetching Requests
      console.log('\n2. Fetching enquiries as Admin via GET /api/book-a-call with JWT...');
      const getRes = await fetch(`http://localhost:${port}/api/book-a-call`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });

      const getData = await getRes.json();
      console.log(`   Response Status: ${getRes.status}`);
      console.log(`   Total Records Returned: ${Array.isArray(getData) ? getData.length : 0}`);

      const foundItem = Array.isArray(getData) ? getData.find(item => item.id === createdId) : null;
      if (!foundItem) {
        console.error(`FAILED: Created record ${createdId} not found in admin list.`);
        server.close();
        process.exit(1);
      }

      console.log('   ✓ Found created record in Admin panel list:', {
        id: foundItem.id,
        name: foundItem.full_name,
        company: foundItem.company_name,
        service: foundItem.requirement_type,
        status: foundItem.status
      });

      // Test 3: Admin Updating Status and Notes
      console.log('\n3. Admin updating request status, priority, and notes via PATCH /api/book-a-call/:id...');
      const patchPayload = {
        status: 'CONTACTED',
        priority: 'HIGH',
        assigned_to: 'Ramesh Kumar - Lead Solution Architect',
        admin_notes: 'Initial discovery call scheduled for Sept 10th at 11:00 AM IST.'
      };

      const patchRes = await fetch(`http://localhost:${port}/api/book-a-call/${createdId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminToken}`
        },
        body: JSON.stringify(patchPayload)
      });

      const patchData = await patchRes.json();
      console.log(`   Response Status: ${patchRes.status}`);
      console.log('   Updated Item:', patchData.item);

      // Test 4: Verifying Persistence
      console.log('\n4. Re-fetching to verify changes persisted in database...');
      const verifyRes = await fetch(`http://localhost:${port}/api/book-a-call`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });

      const verifyData = await verifyRes.json();
      const verifiedItem = Array.isArray(verifyData) ? verifyData.find(item => item.id === createdId) : null;

      console.log('   ✓ Verified Persisted Record State:', {
        id: verifiedItem.id,
        status: verifiedItem.status,
        priority: verifiedItem.priority,
        assigned_to: verifiedItem.assigned_to,
        admin_notes: verifiedItem.admin_notes
      });

      if (verifiedItem.status !== 'CONTACTED' || verifiedItem.priority !== 'HIGH') {
        console.error('FAILED: Updated values did not persist.');
        server.close();
        process.exit(1);
      }

      // Test 5: Verify Stats Endpoint
      console.log('\n5. Fetching /api/stats to check KPI metrics...');
      const statsRes = await fetch(`http://localhost:${port}/api/stats`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });

      const statsData = await statsRes.json();
      console.log('   ✓ Dashboard Stats Metrics:', {
        totalBookCalls: statsData.totalBookCalls,
        newBookCalls: statsData.newBookCalls,
        contactedBookCalls: statsData.contactedBookCalls,
        inProgressBookCalls: statsData.inProgressBookCalls,
        qualifiedBookCalls: statsData.qualifiedBookCalls
      });

      console.log('\n✓ E2E TEST COMPLETED SUCCESSFULLY! ALL CHECKS PASSED.');
      server.close();
      process.exit(0);
    } catch (err) {
      console.error('E2E Test Error:', err);
      server.close();
      process.exit(1);
    }
  });
}

testDirectFlow();
