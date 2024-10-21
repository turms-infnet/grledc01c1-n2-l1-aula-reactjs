import { SupabaseClient } from '@supabase/supabase-js';

export default interface AppContextInterface {
  supabase: SupabaseClient;
  changeLanguage: (lng: string) => void,
  t: (key: string) => string
}