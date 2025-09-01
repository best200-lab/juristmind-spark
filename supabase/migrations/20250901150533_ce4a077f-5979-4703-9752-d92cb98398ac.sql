-- Add blog_body field to news table for full blog post content
ALTER TABLE public.news 
ADD COLUMN blog_body TEXT;