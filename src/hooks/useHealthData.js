import { useState, useEffect } from 'react';
import { healthMetrics, alerts, userProfile } from '../data/dummyHealthData';

export const useHealthData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData({
        profile: userProfile,
        metrics: healthMetrics,
        alerts: alerts
      });
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading, error };
};