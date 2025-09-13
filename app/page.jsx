// app/page.jsx

export default function HomePage() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>📚 OtterlyFocused</h1>
        <p style={styles.subtitle}>
          Track your study time. Compete with friends. Improve your habits.
        </p>
      </header>

      <section style={styles.features}>
        <Feature
          title="⏱ Study Timer"
          description="Stay on track with focused study sessions and clear goals."
        />
        <Feature
          title="🏆 Leaderboards"
          description="Challenge your friends and climb the rankings together."
        />
        <Feature
          title="📈 Study Feedback"
          description="Review your productivity trends and make smarter plans."
        />
      </section>

      <section style={styles.actions}>
        <button style={styles.button}>Sign Up</button>
        <button style={{ ...styles.button, backgroundColor: '#555' }}>Log In</button>
      </section>
    </main>
  );
}

function Feature({ title, description }) {
  return (
    <div style={styles.featureCard}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  main: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#555',
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '1.5rem',
    marginTop: '2rem',
    marginBottom: '3rem',
  },
  featureCard: {
    flex: '1 1 250px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#0070f3',
    color: '#fff',
    cursor: 'pointer',
  },
};
