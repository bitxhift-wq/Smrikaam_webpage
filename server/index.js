import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { router as apiRouter } from './routes/api.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static uploads serving
const UPLOADS_DIR = path.resolve(__dirname, '../public/uploads');
app.use('/uploads', express.static(UPLOADS_DIR));

// API Routes
app.use('/api', apiRouter);

// Root health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Production: Serve frontend static build
const DIST_DIR = path.resolve(__dirname, '../dist');
app.use(express.static(DIST_DIR));

app.use((req, res) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

// Start listening if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`SMRIKAAM Central CMS API Server running on port ${PORT}`);
    console.log(`Persistent File Storage at: ${UPLOADS_DIR}`);
  });
}

export default app;
