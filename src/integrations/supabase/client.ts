// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ikeceipzpjnsanoootxl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrZWNlaXB6cGpuc2Fub29vdHhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3ODExNzUsImV4cCI6MjA2NDM1NzE3NX0.D7_nMqhtgezMw1PMo0SDXLaij4QANf_c1xijXC4Y6xE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);