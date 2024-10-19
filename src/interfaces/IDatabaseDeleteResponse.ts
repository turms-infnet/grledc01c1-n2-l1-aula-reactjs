import { AuthResponse } from '@supabase/supabase-js';

export default interface DatabaseDeleteResponse {
  data: AuthResponse | null;
}