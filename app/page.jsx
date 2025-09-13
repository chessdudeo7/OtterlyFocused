'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './page.module.css'; // CSS module for button styling

const inlineStyles = {
  main: {
    scrollBehavior: 'smooth',
    backgroundColor: '#fefefe',
    minHeight: '100vh',
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
    margin: 0,
    fontWeight: '900',
    color: '#FF6F91',
    textShadow: '3px 3px 6px rgba(255, 111, 145, 0.5)',
    fontFamily: "'Baloo 2', cursive",
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
};

// Animated section component using framer-motion and intersection observer
const AnimatedSection = ({ backgroundColor, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      style={{ ...inlineStyles.section, backgroundColor }}
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
    <main style={inlineStyles.main}>
      <AnimatedSection backgroundColor="#f0f4ff">
        <h1 style={inlineStyles.title}>📚 OtterlyFocused</h1>
        <p style={inlineStyles.subtitle}>
          Track your study time. Compete with friends. Improve your habits.
        </p>
        <Link href="/timer">
          <button className={styles.button}>Start Timing</button>
        </Link>
      </AnimatedSection>

      <AnimatedSection backgroundColor="#e8f5e9">
        <h2 style={inlineStyles.heading}>⏱ Study Timer</h2>
        <p style={inlineStyles.text}>
          Use our focused timer to manage Pomodoro sessions and stay productive.
        </p>
        <Link href="/timer">
          <button className={styles.button}>Go to Timer</button>
        </Link>
      </AnimatedSection>

      <AnimatedSection backgroundColor="#fff8e1">
        <h2 style={inlineStyles.heading}>🏆 Leaderboards</h2>
        <p style={inlineStyles.text}>
          See how you rank among friends and turn studying into a friendly competition.
        </p>
        <Link href="/leaderboards">
          <button className={styles.button}>View Leaderboards</button>
        </Link>
      </AnimatedSection>

      <AnimatedSection backgroundColor="#fce4ec">
        <h2 style={inlineStyles.heading}>📈 Study Feedback</h2>
        <p style={inlineStyles.text}>
          Analyze your study patterns and get insights to improve your learning efficiency.
        </p>
        <Link href="/feedback">
          <button className={styles.button}>Get Feedback</button>
        </Link>
      </AnimatedSection>
    </main>
  );
}