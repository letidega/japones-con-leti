import { createClient } from '@supabase/supabase-js'

// En Vite para el navegador, se usa exclusivamente import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('ERROR: No se han encontrado las variables de Supabase (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). Asegúrate de añadirlas en Vercel.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
)
