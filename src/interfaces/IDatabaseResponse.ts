import { AuthError, AuthResponse } from '@supabase/supabase-js';

export default interface DatabaseResponse {
  data: AuthResponse | null;
  error: AuthError | null;
}