import { createClient } from '@supabase/supabase-js';

export async function POST(request) {
  try {
    const { email, password, username } = await request.json();

    if (!email || !password || !username) {
      return Response.json(
        { error: 'Email, username, and password are required.' },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      const missing = [];
      if (!supabaseUrl) missing.push('SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL');
      if (!serviceRoleKey) missing.push('SUPABASE_SERVICE_ROLE_KEY');
      return Response.json(
        { error: `Server is missing Supabase configuration: ${missing.join(', ')}` },
        { status: 500 },
      );
    }

    const admin = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        display_name: username,
      },
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json(
      { error: 'Unexpected server error during signup.' },
      { status: 500 },
    );
  }
}
