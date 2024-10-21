import { AuthError, AuthResponse } from '@supabase/supabase-js';

export default interface SignInResponse {
  data: AuthResponse | null;
  error: AuthError | null;
}