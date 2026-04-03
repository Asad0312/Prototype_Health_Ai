import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/dashboard', async (req, res) => {
  try {
    const userId = 1; // TODO: from auth middleware
    const [metrics] = await pool.query(
      'SELECT * FROM health_metrics WHERE user_id = ? ORDER BY date DESC LIMIT 7',
      [userId]
    );
    const [meds] = await pool.query('SELECT * FROM medications WHERE user_id = ?', [userId]);
    
    res.json({
      metrics,
      medications: meds,
      alerts: [] // TODO: implement
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

