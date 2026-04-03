import { api } from './api.js';

export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response;
  },
  logout: () => {
    localStorage.removeItem('user');
  }
};
