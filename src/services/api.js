import axios from 'axios';

// Vite env var: define in .env as VITE_API_BASE_URL=https://...
const API_BASE_URL = import.meta?.env?.VITE_API_BASE_URL || 'https://pyniaidiew-api.vercel.app';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Known categories for shops (adjust to match backend)
export const SHOP_CATEGORIES = [
  'clinic',
  'bakery',
  'wholesale',
  'general-store',
  'shoe-store',
  'departmental-store',
  'tailoring',
  'clothes',
];

// Helpers for shops
export async function fetchShopsByCategory(category, params = {}) {
  // Expected endpoint: /api/shops/:category
  const response = await api.get(`/api/shops/${category}`, { params });
  return response.data;
}

export async function fetchShopById(category, id) {
  // Expected endpoint: /api/shops/:category/:id
  const response = await api.get(`/api/shops/${category}/${id}`);
  return response.data;
}

// Products (existing pattern reference)
export async function fetchProducts(params = {}) {
  const response = await api.get('/api/products', { params });
  return response.data;
}

export async function fetchProductById(id) {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
}

// Global Search Helpers
export async function searchProducts(query) {
  // If backend supports query param filtering, pass q; otherwise filter client-side
  try {
    const response = await api.get('/api/products', { params: { q: query } });
    const data = response.data;
    if (Array.isArray(data) && data.length > 0 && data[0]?.title) {
      // If backend ignored q and returned all, filter locally
      return data.filter(p => (p.title || '').toLowerCase().includes(query.toLowerCase()));
    }
    return data;
  } catch (e) {
    // Fallback: fetch all and filter
    const all = await fetchProducts();
    return (all || []).filter(p => (p.title || '').toLowerCase().includes(query.toLowerCase()));
  }
}

export async function searchShops(query) {
  // Try a dedicated search endpoint first
  try {
    const response = await api.get('/api/shops/search', { params: { q: query } });
    return response.data;
  } catch (e) {
    // Fallback: aggregate all categories, then filter
    const lower = query.toLowerCase();
    const results = [];
    for (const category of SHOP_CATEGORIES) {
      try {
        const list = await fetchShopsByCategory(category);
        const filtered = (list || []).filter(item => (
          (item.title || item.name || item.shopName || '').toLowerCase().includes(lower)
        )).map(x => ({ ...x, category }));
        results.push(...filtered);
      } catch (_) {
        // ignore category errors
      }
    }
    return results;
  }
}
