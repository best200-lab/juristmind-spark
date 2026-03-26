import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsItem {
  id?: string;
  title: string;
  description: string;
  category: string;
  image_url?: string;
  gradient?: string;
  published_date?: string;
  is_published?: boolean;
  author?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
  );

  try {
    const { method } = req;
    const url = new URL(req.url);
    const newsId = url.searchParams.get('id');

    switch (method) {
      case 'GET':
        if (newsId) {
          // Get single news item
          const { data, error } = await supabaseClient
            .from('news')
            .select('*')
            .eq('id', newsId)
            .eq('is_published', true)
            .single();

          if (error) {
            console.error('Error fetching news item:', error);
            return new Response(
              JSON.stringify({ error: 'News item not found' }),
              { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        } else {
          // Get all published news items
          const { data, error } = await supabaseClient
            .from('news')
            .select('*')
            .eq('is_published', true)
            .order('published_date', { ascending: false });

          if (error) {
            console.error('Error fetching news:', error);
            return new Response(
              JSON.stringify({ error: 'Failed to fetch news' }),
              { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }

          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

      case 'POST':
        // Create new news item (admin only)
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
          return new Response(
            JSON.stringify({ error: 'Authentication required' }),
            { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const newsData: NewsItem = await req.json();
        
        const { data, error } = await supabaseClient
          .from('news')
          .insert([{
            title: newsData.title,
            description: newsData.description,
            category: newsData.category,
            image_url: newsData.image_url,
            gradient: newsData.gradient || 'from-blue-600 to-purple-600',
            published_date: newsData.published_date || new Date().toISOString().split('T')[0],
            is_published: newsData.is_published ?? true,
            author: newsData.author || 'Admin'
          }])
          .select()
          .single();

        if (error) {
          console.error('Error creating news item:', error);
          return new Response(
            JSON.stringify({ error: 'Failed to create news item' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(JSON.stringify(data), {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'PUT':
        // Update news item (admin only)
        if (!newsId) {
          return new Response(
            JSON.stringify({ error: 'News ID required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const updateAuthHeader = req.headers.get('Authorization');
        if (!updateAuthHeader) {
          return new Response(
            JSON.stringify({ error: 'Authentication required' }),
            { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const updateData: Partial<NewsItem> = await req.json();
        
        const { data: updatedData, error: updateError } = await supabaseClient
          .from('news')
          .update(updateData)
          .eq('id', newsId)
          .select()
          .single();

        if (updateError) {
          console.error('Error updating news item:', updateError);
          return new Response(
            JSON.stringify({ error: 'Failed to update news item' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(JSON.stringify(updatedData), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });

      case 'DELETE':
        // Delete news item (admin only)
        if (!newsId) {
          return new Response(
            JSON.stringify({ error: 'News ID required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const deleteAuthHeader = req.headers.get('Authorization');
        if (!deleteAuthHeader) {
          return new Response(
            JSON.stringify({ error: 'Authentication required' }),
            { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { error: deleteError } = await supabaseClient
          .from('news')
          .delete()
          .eq('id', newsId);

        if (deleteError) {
          console.error('Error deleting news item:', deleteError);
          return new Response(
            JSON.stringify({ error: 'Failed to delete news item' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ message: 'News item deleted successfully' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

      default:
        return new Response(
          JSON.stringify({ error: 'Method not allowed' }),
          { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});