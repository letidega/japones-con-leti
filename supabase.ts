import { createClient } from '@supabase/supabase-js'

// Hardcoding keys to ensure the project works immediately on Vercel for class delivery
const supabaseUrl = "https://yfhssdijgcimhtrrrlkb.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmaHNzZGlqZ2NpbWh0cnJybGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NzIzMTQsImV4cCI6MjA5MzI0ODMxNH0.CdtB1hD4CBXa7YQ3aT227Orzttz5Qa2qHY_MDfboB4E"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
