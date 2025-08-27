const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ozinwpjtxvvoexvcjcip.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96aW53cGp0eHZ2b2V4dmNqY2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMTc0NDYsImV4cCI6MjA3MTg5MzQ0Nn0.ksqyHsp6HYFxf_ibBylqjZB6huixddpraEMZ3ubHFHc';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;