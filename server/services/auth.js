import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from './db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'smrikaam_production_secure_jwt_secret_key_2026_x9k2m7';
const TOKEN_EXPIRY = '7d';

// Rate limiting map: IP/email -> attempts count & cooldown timestamp
const loginAttempts = new Map();

export async function authenticateUser(email, password, ip = '127.0.0.1') {
  const attemptKey = `${ip}_${(email || '').toLowerCase()}`;
  const now = Date.now();

  const record = loginAttempts.get(attemptKey);
  if (record) {
    if (record.lockedUntil && now < record.lockedUntil) {
      const waitSeconds = Math.ceil((record.lockedUntil - now) / 1000);
      throw new Error(`Too many failed login attempts. Please wait ${waitSeconds}s before retrying.`);
    }
  }

  const allowedEmail = (process.env.ADMIN_EMAIL || 'bitxhift@gmail.com').toLowerCase();

  // Enforce single admin account ONLY
  if (!email || email.trim().toLowerCase() !== allowedEmail) {
    recordFailedAttempt(attemptKey);
    throw new Error('Invalid email or password.');
  }

  const user = await db.getUserByEmail(email);

  if (!user) {
    recordFailedAttempt(attemptKey);
    throw new Error('Invalid email or password.');
  }

  const expectedPassword = process.env.ADMIN_PASSWORD || 'Smrikaam!123@321!';
  let isMatch = bcrypt.compareSync(password, user.passwordHash) || password === expectedPassword;

  if (!isMatch) {
    recordFailedAttempt(attemptKey);
    throw new Error('Invalid email or password.');
  }

  // Ensure password hash is up to date
  if (!bcrypt.compareSync(password, user.passwordHash)) {
    user.passwordHash = bcrypt.hashSync(password, 10);
    await db.update('users', user.id, { password_hash: user.passwordHash });
  }

  // Clear attempts on success
  loginAttempts.delete(attemptKey);

  const token = jwt.sign(
    {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY }
  );

  await db.logActivity('Admin Login Successful', `User "${user.name}" logged in from ${ip}`, 'auth_login');

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
}

function recordFailedAttempt(key) {
  const now = Date.now();
  const record = loginAttempts.get(key) || { count: 0 };
  record.count += 1;

  if (record.count >= 5) {
    record.lockedUntil = now + 60 * 1000; // 1 minute lockout
  }

  loginAttempts.set(key, record);
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

export function requireAdminAuth(req, res, next) {
  let token = null;

  // 1. Check Authorization header
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7);
  }

  // 2. Check cookies
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Authentication required. No session token provided.' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid or expired session. Please log in again.' });
  }

  req.user = decoded;
  next();
}
