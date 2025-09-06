-- Fix function search path for existing functions
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = 'public'
AS $function$
DECLARE
  username_base TEXT;
  final_username TEXT;
  counter INTEGER := 1;
BEGIN
  -- Generate username from email or use a default
  username_base := COALESCE(
    SPLIT_PART(NEW.email, '@', 1),
    'user'
  );
  
  -- Make sure username is valid (lowercase, alphanumeric with underscores)
  username_base := LOWER(REGEXP_REPLACE(username_base, '[^a-z0-9_]', '_', 'g'));
  final_username := username_base;
  
  -- Check if username exists and make it unique
  WHILE EXISTS (SELECT 1 FROM public.profiles WHERE username = final_username) LOOP
    final_username := username_base || '_' || counter;
    counter := counter + 1;
  END LOOP;
  
  -- Insert profile with generated username
  INSERT INTO public.profiles (user_id, username, full_name)
  VALUES (
    NEW.id, 
    final_username,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', final_username)
  );
  
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;