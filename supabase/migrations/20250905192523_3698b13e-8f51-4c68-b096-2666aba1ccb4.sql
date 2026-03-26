-- Add github_url field to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS github_url text;