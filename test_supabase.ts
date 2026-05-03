import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  console.log('Testing connection to Supabase...')
  try {
    const { data, error } = await supabase.from('courses').select('*').limit(1)
    if (error) {
      console.error('Error fetching courses:', error.message)
      console.log('Checking for cursos table...')
      const { data: data2, error: error2 } = await supabase.from('cursos').select('*').limit(1)
      if (error2) {
        console.error('Error fetching cursos:', error2.message)
      } else {
        console.log('Success! Table "cursos" found.')
      }
    } else {
      console.log('Success! Table "courses" found.')
    }
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}

testConnection()
