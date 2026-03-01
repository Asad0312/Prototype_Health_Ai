import { healthMetrics, alerts, medications } from '../data/dummyHealthData';

export const healthService = {
  getDashboardData: async () => {
    return {
      metrics: healthMetrics,
      alerts: alerts,
      medications: medications
    };
  },
  uploadDocument: async (file) => {
    console.log('Uploading:', file.name);
    return { success: true };
  }
};