import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Imported key/url from useFetch for /Login
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// key/login for authProvider
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

export const supabase = createClient(supabaseUrl, supabaseAnonKey)