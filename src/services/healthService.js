import { api } from './api.js';

export const healthService = {
  getDashboardData: async () => {
    const response = await api.get('/health/dashboard');
    return response;
  },
  uploadDocument: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    // TODO: implement file upload endpoint
    return { success: true };
  }
};
