'use client';

import { useState } from 'react';
import styles from './signup.module.css';
import { supabase } from '../supabaseClient'; 

export default function SignUpPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Good for UX

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      setLoading(false);
      return;
    }

    const { data, error: sbError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: username,
        },
      },
    });

    if (sbError) {
      setError(sbError.message);
      setLoading(false);
    } else {
      alert('Success! Check your email for a confirmation link.');
      window.location.href = '/signin';
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Join the Study Group!</h1>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>Start tracking your focus today.</p>
        
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
          Already have an account? <a href="/signin" style={{ color: '#FF6F91' }}>Sign In</a>
        </p>
      </div>
    </main>
  );
}