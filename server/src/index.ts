import express from 'express';
import cors from 'cors';
import path from 'node:path';
import bundleRoutes from './routes/bundleRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({ origin: '*' })); 
app.use(express.json());
app.use('/assets', express.static(path.resolve(process.cwd(), 'src/assets')));

// Routes
app.use('/api', bundleRoutes);

// Health Check Endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});