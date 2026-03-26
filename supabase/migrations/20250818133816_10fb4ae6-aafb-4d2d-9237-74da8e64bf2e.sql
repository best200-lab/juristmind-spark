-- Add author field to news table
ALTER TABLE public.news ADD COLUMN author TEXT NOT NULL DEFAULT 'Admin';