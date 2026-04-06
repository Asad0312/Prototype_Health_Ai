import express from 'express';
import pool from '../db.js';

const router = express.Router();

// GET /api/health/dashboard - user metrics (mock userId=req.query.userId)
router.get('/dashboard', async (req, res) => {
  try {
    const userId = req.query.userId || 1;
    const [metrics] = await pool.execute(`
      SELECT date, heart_rate, blood_pressure, weight 
      FROM health_metrics 
      WHERE user_id = ? 
      ORDER BY date DESC 
      LIMIT 10
    `, [userId]);

    res.json({
      metrics: metrics || [],
      alerts: [],
      medications: []
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

