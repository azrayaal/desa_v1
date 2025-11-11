import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Services untuk Dashboard Desa

export const desaService = {
  // Get all desa data
  getAllDesa: async () => {
    const response = await api.get('/desa');
    return response.data.desa;
  },

  // Get desa by ID with full details
  getDesaById: async (id: number) => {
    const response = await api.get(`/desa/${id}`);
    return response.data.desa;
  },
};

export const productsService = {
  // Get products by desa ID
  getProductsByDesa: async (desaId: number) => {
    const response = await api.get(`/products/desa/${desaId}`);
    return response.data.products;
  },
};

export const talentsService = {
  // Get talents by desa ID
  getTalentsByDesa: async (desaId: number) => {
    const response = await api.get(`/talents/desa/${desaId}`);
    return response.data.talents;
  },
};

export default api;

