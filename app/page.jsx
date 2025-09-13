'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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