export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (name, email, password) => {
    const response = await api.post('/register/register', { name, email, password });
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('healthguard_user');
  }
};
