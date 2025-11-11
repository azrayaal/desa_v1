import { useState, useEffect } from 'react';
import { productsService } from '../services/api';

// Custom hook untuk mengambil data products dari API
export const useProducts = (desaId?: number) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!desaId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productsService.getProductsByDesa(desaId);
        setProducts(data || []);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [desaId]);

  return { products, loading, error };
};

