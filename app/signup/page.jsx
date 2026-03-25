'use client';

import { useState } from 'react';
import styles from './signup.module.css';

export default function SignUpPage() {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Simple validation: check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });

    const result = await res.json();

    if (res.ok) {
      window.location.href = '/signin';
    } else {
      setError(result.error || 'Something went wrong. Try again!');
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Join the Raft!</h1>
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
          
          <button type="submit" className={styles.button}>
            Create Account
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
          Already have an account? <a href="/signin" style={{ color: '#FF6F91' }}>Sign In</a>
        </p>
      </div>
    </main>
  );
}