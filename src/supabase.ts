import { createClient } from '@supabase/supabase-js'

// Intentamos usar la URL de la forma más estándar posible
const PROJECT_ID = "yfhssdijgcimhtrrrlkb";
const supabaseUrl = `https://${PROJECT_ID}.supabase.co`;
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmaHNzZGlqZ2NpbWh0cnJybGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2NzIzMTQsImV4cCI6MjA5MzI0ODMxNH0.CdtB1hD4CBXa7YQ3aT227Orzttz5Qa2qHY_MDfboB4E";

console.log("Conectando a Supabase en:", supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
