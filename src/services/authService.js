export const authService = {
  login: async (email, password) => {
    // Mock login
    return { user: { id: 1, name: 'Sarah Johnson', email } };
  },
  logout: () => {
    // Mock logout
  }
};