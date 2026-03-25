'use client';

import styles from './leaderboard.module.css';
import Navbar from '../../components/navbar';

export default function LeaderboardPage() {
  // Mock data - eventually this will come from your database
  const users = [
    { id: 1, name: "Oliver Otter", hours: 42, emoji: "🦦" },
    { id: 2, name: "StudySam", hours: 38, emoji: "📖" },
    { id: 3, name: "FocusFiona", hours: 35, emoji: "🎯" },
    { id: 4, name: "CoffeeCat", hours: 28, emoji: "☕" },
    { id: 5, name: "NightOwl", hours: 22, emoji: "🦉" },
    { id: 6, name: "BioBen", hours: 15, emoji: "🧬" },
  ];

  const topThree = [users[1], users[0], users[2]]; // 2nd, 1st, 3rd for podium order
  const theRest = users.slice(3);

  return (
    <div style={{ backgroundColor: '#f0f4ff', minHeight: '100vh' }}>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Study Rankings</h1>

        {/* Podium Section */}
        <div className={styles.podiumContainer}>
          {topThree.map((user, index) => {
            const rankClass = index === 1 ? styles.first : index === 0 ? styles.second : styles.third;
            const medal = index === 1 ? "🥇" : index === 0 ? "🥈" : "🥉";
            
            return (
              <div key={user.id} className={`${styles.podiumStep} ${rankClass}`}>
                <span style={{ fontSize: '1.5rem' }}>{medal}</span>
                <div className={styles.avatar}>{user.emoji}</div>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.hours}>{user.hours}h</div>
              </div>
            );
          })}
        </div>

        {/* List Section */}
        <div className={styles.listContainer}>
          {theRest.map((user, index) => (
            <div key={user.id} className={styles.listRow}>
              <span className={styles.rank}>{index + 4}</span>
              <span style={{fontSize: '1.2rem'}}>{user.emoji}</span>
              <span className={styles.listName}>{user.name}</span>
              <span className={styles.listTime}>{user.hours} hours</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}