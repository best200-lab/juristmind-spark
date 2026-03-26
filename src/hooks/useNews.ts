import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  gradient: string;
  published_date: string;
  author: string;
  blog_body?: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase.functions.invoke('news', {
        method: 'GET'
      });

      if (error) {
        throw error;
      }

      setNews(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch news');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const createNews = async (newsData: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Authentication required');
      }

      const { data, error } = await supabase.functions.invoke('news', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        },
        body: newsData
      });

      if (error) {
        throw error;
      }

      await fetchNews(); // Refresh the list
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create news');
      throw err;
    }
  };

  const updateNews = async (id: string, newsData: Partial<NewsItem>) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Authentication required');
      }

      const { data, error } = await supabase.functions.invoke('news', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        },
        body: newsData
      });

      if (error) {
        throw error;
      }

      await fetchNews(); // Refresh the list
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update news');
      throw err;
    }
  };

  const deleteNews = async (id: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Authentication required');
      }

      const { error } = await supabase.functions.invoke('news', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });

      if (error) {
        throw error;
      }

      await fetchNews(); // Refresh the list
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete news');
      throw err;
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {
    news,
    loading,
    error,
    fetchNews,
    createNews,
    updateNews,
    deleteNews
  };
};