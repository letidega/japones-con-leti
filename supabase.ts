import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // En desarrollo local fuera de Vercel puede que necesitemos cargar .env.local
  // Pero en Vercel las variables ya están en process.env
  if (typeof window === 'undefined') {
    console.warn('Missing Supabase environment variables');
  }
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)
