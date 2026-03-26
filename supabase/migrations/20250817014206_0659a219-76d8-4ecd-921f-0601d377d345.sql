-- Create news table
CREATE TABLE public.news (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  gradient TEXT DEFAULT 'from-blue-600 to-purple-600',
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_published BOOLEAN DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (since this is public news)
CREATE POLICY "News is viewable by everyone" 
ON public.news 
FOR SELECT 
USING (is_published = true);

-- Create policy for authenticated users to manage news (admin functionality)
CREATE POLICY "Authenticated users can manage news" 
ON public.news 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_news_updated_at
BEFORE UPDATE ON public.news
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample news data
INSERT INTO public.news (title, description, category, image_url, gradient, published_date) VALUES
('JURIST MIND AI 4.0', 'JURIST MIND 4.0 is the most intelligent model in the world. It includes native tool use and real-time search integration, and is available now to Supabase and enterprise customers.', 'AI RELEASE', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center', 'from-blue-600 to-purple-600', '2024-07-08'),
('Announcing JURIST MIND for Government', 'We are excited to announce JURIST MIND For Government — a suite of premier AI products available for US limited States government customers.', 'GOVERNMENT', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center', 'from-indigo-600 to-blue-600', '2024-07-04'),
('JURIST MIND 3 Beta — The Age of Reasoning Agents', 'We are thrilled to unveil an early preview of JURIST MIND 3, our most advanced model yet, blending superior reasoning with extensive pretrained knowledge.', 'AI BETA', 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&crop=center', 'from-red-600 to-orange-600', '2024-02-10');