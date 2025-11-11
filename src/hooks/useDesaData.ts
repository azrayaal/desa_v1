import { useState, useEffect } from 'react';
import { desaService } from '../services/api';
import type { DesaData } from '../types';

// Custom hook untuk mengambil data desa dari API
export const useDesaData = (desaId?: number) => {
  const [data, setData] = useState<DesaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (desaId) {
          // Fetch specific desa
          const desaData = await desaService.getDesaById(desaId);
          setData(mapApiToDesaData(desaData));
        } else {
          // Fetch first desa as default
          const allDesa = await desaService.getAllDesa();
          if (allDesa && allDesa.length > 0) {
            const desaData = await desaService.getDesaById(allDesa[0].id);
            setData(mapApiToDesaData(desaData));
          }
        }
      } catch (err) {
        console.error('Failed to fetch desa data:', err);
        setError('Failed to load desa data');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [desaId]);

  return { data, loading, error };
};

// Helper function to map API response to DesaData type
const mapApiToDesaData = (apiData: any): DesaData => {
  return {
    name: apiData.name || '',
    lat: parseFloat(apiData.lat) || 0,
    lng: parseFloat(apiData.lng) || 0,
    population: apiData.population || 0,
    area: apiData.area || '',
    leader: apiData.leader || '',
    achievements: apiData.achievements?.map((a: any) => a.title) || [],
    issues: apiData.issues?.map((i: any) => ({
      name: i.name,
      value: parseFloat(i.value),
      color: i.color
    })) || [],
    sentiment: {
      positive: apiData.sentiment?.positive || 0,
      neutral: apiData.sentiment?.neutral || 0,
      negative: apiData.sentiment?.negative || 0
    },
    topPeople: apiData.topPeople?.map((p: any, index: number) => ({
      no: p.position || index + 1,
      people: p.name,
      total: p.mention_count || 0
    })) || [],
    articles: apiData.articles?.map((a: any) => ({
      source: a.source,
      title: a.title,
      time: a.time
    })) || []
  };
};

// Custom hook untuk mengambil semua desa
export const useAllDesa = () => {
  const [desaList, setDesaList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await desaService.getAllDesa();
        setDesaList(data || []);
      } catch (err) {
        console.error('Failed to fetch desa list:', err);
        setError('Failed to load desa list');
        setDesaList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { desaList, loading, error };
};

