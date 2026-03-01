// Mock API service for prototype
export const api = {
  get: async (url) => {
    console.log(`GET request to ${url}`);
    return { data: {} };
  },
  post: async (url, data) => {
    console.log(`POST request to ${url}`, data);
    return { data: {} };
  }
};