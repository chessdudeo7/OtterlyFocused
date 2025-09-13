'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './page.module.css';

<Link href="/timer">
  <button className={styles.button}>Start Timing</button>
</Link>

// Reusable animated section component
const AnimatedSection = ({ backgroundColor, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of section is visible
  });

  return (
    <motion.section
      ref={ref}
      style={{ ...styles.section, backgroundColor }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

export default function HomePage() {
  return (
    <main style={styles.main}>
      <AnimatedSection backgroundColor="#f0f4ff">
        <h1 style={styles.title}>📚 OtterlyFocused</h1>
        <p style={styles.subtitle}>
          Track your study time. Compete with friends. Improve your habits.
        </p>
      </AnimatedSection>

      <AnimatedSection backgroundColor="#e8f5e9">
        <h2 style={styles.heading}>⏱ Study Timer</h2>
        <p style={styles.text}>
          Use our focused timer to manage Pomodoro sessions and stay productive.
        </p>
      </AnimatedSection>

      <AnimatedSection backgroundColor="#fff8e1">
        <h2 style={styles.heading}>🏆 Leaderboards</h2>
        <p style={styles.text}>
          See how you rank among friends and turn studying into a friendly competition.
        </p>
      </AnimatedSection>

      <AnimatedSection backgroundColor="#fce4ec">
        <h2 style={styles.heading}>📈 Study Feedback</h2>
        <p style={styles.text}>
          Analyze your study patterns and get insights to improve your learning efficiency.
        </p>
      </AnimatedSection>
    </main>
  );
}

const styles = {
  main: {
    scrollBehavior: 'smooth',
    backgroundColor: '#fefefe',
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
    fontSize: '4rem',
    margin: '0',
    fontWeight: '900',
    color: '#FF6F91',  // soft pink/red
    textShadow: '3px 3px 6px rgba(255, 111, 145, 0.5)',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#666',
    maxWidth: '600px',
    fontWeight: '600',
    marginTop: '0.5rem',
    fontFamily: "'Baloo 2', cursive",
  },
  heading: {
    fontSize: '2.75rem',
    marginBottom: '1rem',
    fontWeight: '700',
    color: '#FF6F91',
    fontFamily: "'Baloo 2', cursive",
    textShadow: '2px 2px 4px rgba(255, 111, 145, 0.3)',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    color: '#444',
    marginBottom: '1.5rem',
    fontFamily: "'Baloo 2', cursive",
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.1rem',
    backgroundColor: '#FF6F91',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: '700',
    fontFamily: "'Baloo 2', cursive",
    boxShadow: '0 6px 12px rgba(255, 111, 145, 0.3)',
  },
};