import { api } from './api.js';

export const healthService = {
  getDashboardData: async (userId) => {
    const response = await api.get(`/health/dashboard?userId=${userId}`);
    return response;
  },
  uploadDocument: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    // Future: POST /api/upload
    return { success: true, url: URL.createObjectURL(file) };
  }
};
