
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Provide a clear, actionable message instead of a raw stack trace when the
// backend is started without real Supabase credentials (for example, right
// after copying server/.env.example to server/.env in a fresh Codespace).
if (!supabaseUrl || !supabaseKey || !/^https?:\/\//i.test(supabaseUrl)) {
    console.error(
        '\n[Bean Tradition] Missing or invalid Supabase credentials.\n' +
        'Set SUPABASE_URL and SUPABASE_KEY in server/.env before starting the backend.\n' +
        'See server/.env.example for the full list of required variables.\n'
    );
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
