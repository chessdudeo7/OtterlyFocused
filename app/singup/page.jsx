'use client';

export default function SignUpPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = {
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
    };

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      // Redirect to sign-in page
      window.location.href = '/signin';
    } else {
      alert(result.error || 'Error signing up');
    }
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginTop: '1rem' }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '300px', padding: '0.5rem' }}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '300px', padding: '0.5rem' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          style={{ display: 'block', marginBottom: '1rem', width: '300px', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 2rem' }}>Sign Up</button>
      </form>
    </main>
  );
}
