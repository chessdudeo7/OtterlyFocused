// app/page.jsx

export default function HomePage() {
  return (
    <main style={styles.main}>
      <section style={{ ...styles.section, backgroundColor: '#f0f4ff' }}>
        <h1 style={styles.title}>📚 OtterlyFocused</h1>
        <p style={styles.subtitle}>
          Track your study time. Compete with friends. Improve your habits.
        </p>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#e8f5e9' }}>
        <h2 style={styles.heading}>⏱ Study Timer</h2>
        <p style={styles.text}>
          Stay on track with focused study sessions and custom goals. Use the built-in timer to
          structure your work and break periods effectively.
        </p>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#fff8e1' }}>
        <h2 style={styles.heading}>🏆 Leaderboards</h2>
        <p style={styles.text}>
          Challenge your friends, climb the leaderboard, and make studying competitive and fun.
        </p>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#fce4ec' }}>
        <h2 style={styles.heading}>📈 Study Feedback</h2>
        <p style={styles.text}>
          Get insights into your productivity trends. See when you're most focused and receive
          suggestions for improving your study habits.
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: {
    scrollBehavior: 'smooth',
  },
  section: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#555',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '2.25rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    maxWidth: '600px',
    color: '#444',
  },
};
