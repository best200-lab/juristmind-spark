-- Add Facebook and Instagram columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS facebook_url TEXT,
ADD COLUMN IF NOT EXISTS instagram_url TEXT;