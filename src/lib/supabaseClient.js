import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://xftjoyrggcewuljctysj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmdGpveXJnZ2Nld3VsamN0eXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2Mzc3MTAsImV4cCI6MjAyNjIxMzcxMH0.SEYn_DUU26-ERYzjxgyN4C50jNfYls-oW_t2olsHzUE')