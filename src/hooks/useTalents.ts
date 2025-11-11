import { useState, useEffect } from 'react';
import { talentsService } from '../services/api';

// Custom hook untuk mengambil data talents dari API
export const useTalents = (desaId?: number) => {
  const [talents, setTalents] = useState<any[]>([]);
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
        const data = await talentsService.getTalentsByDesa(desaId);
        setTalents(data || []);
      } catch (err) {
        console.error('Failed to fetch talents:', err);
        setError('Failed to load talents');
        setTalents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [desaId]);

  return { talents, loading, error };
};

