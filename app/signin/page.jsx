'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/src/supabaseClient';

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push('/');
  };

  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ width: '100%', maxWidth: '420px', border: '1px solid #ddd', borderRadius: '12px', padding: '1.25rem' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>Sign In</h1>
        {error && <p style={{ color: 'crimson', marginBottom: '0.75rem' }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
          <input type="email" name="email" placeholder="Email Address" required style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid #bbb' }} />
          <input type="password" name="password" placeholder="Password" required style={{ padding: '0.65rem', borderRadius: '8px', border: '1px solid #bbb' }} />
          <button type="submit" disabled={loading} style={{ padding: '0.7rem', borderRadius: '8px', border: 'none', background: '#ff6f91', color: 'white', cursor: 'pointer' }}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
}
