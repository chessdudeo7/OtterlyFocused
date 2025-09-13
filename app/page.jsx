// app/page.jsx

export default function HomePage() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1>OtterlyFocused</h1>
        <p>Your study buddy to track time, compete with friends, and get feedback.</p>
      </header>

      <section style={styles.features}>
        <FeatureCard
          title="Study Timer"
          description="Set timers to focus and track your study sessions efficiently."
          emoji="⏳"
        />
        <FeatureCard
          title="Friend Leaderboards"
          description="Compete with friends and climb the leaderboard to stay motivated."
          emoji="🏆"
        />
        <FeatureCard
          title="Study Feedback"
          description="Get personalized feedback to improve your study habits."
          emoji="📊"
        />
      </section>

      <section style={styles.cta}>
        <button style={styles.button}>Sign Up</button>
        <button style={{ ...styles.button, marginLeft: 10 }}>Log In</button>
      </section>
    </main>
  );
}

function FeatureCard({ title, description, emoji }) {
  return (
    <div style={styles.card}>
      <div style={styles.emoji}>{emoji}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  main: {
    maxWidth: 800,
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  header: {
    marginBottom: "3rem",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "3rem",
    flexWrap: "wrap",
  },
  card: {
    flex: "1 1 200px",
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: "1rem",
    margin: "0 1rem 1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  emoji: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  cta: {
    marginTop: "2rem",
  },
  button: {
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#0070f3",
    color: "#fff",
    transition: "background-color 0.3s ease",
  },
};
