import { createClient } from '@supabase/supabase-js'

// Intentamos obtener las variables de Vite (navegador) o de process.env (Node)
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  if (typeof window !== 'undefined') {
    console.warn('Supabase configuration missing! Check your environment variables.');
  }
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
)
