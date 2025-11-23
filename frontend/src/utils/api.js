import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API endpoints
export const servicesAPI = {
  getAll: () => api.get('/services/'),
  getBySlug: (slug) => api.get(`/services/${slug}`),
};

export const contactAPI = {
  sendMessage: (data) => api.post('/contact/', data),
  getMessages: () => api.get('/contact/'),
};


export default api;
