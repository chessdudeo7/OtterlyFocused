'use client';

import { useState, useRef } from 'react';
import styles from './timer.module.css';

export default function TimerPage() {
  const [mode, setMode] = useState('stopwatch'); // 'stopwatch' or 'timer'
  const [time, setTime] = useState(0); // seconds
  const [inputMinutes, setInputMinutes] = useState('');
  const [inputSeconds, setInputSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const start = () => {
    if (isRunning) return;

    // For timer mode, initialize countdown time from inputs
    if (mode === 'timer') {
      const mins = parseInt(inputMinutes || '0', 10);
      const secs = parseInt(inputSeconds || '0', 10);
      const total = mins * 60 + secs;
      if (isNaN(total) || total <= 0) return alert('Enter valid time');
      setTime(total);
    }

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (mode === 'timer') {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        } else {
          return prev + 1;
        }
      });
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setTime(0);
    setInputMinutes('');
    setInputSeconds('');
  };

  const handleModeChange = (newMode) => {
    reset();
    setMode(newMode);
  };

  return (
    <main className={styles.timerPage}>
      <h1 className={styles.title}>🕒 {mode === 'stopwatch' ? 'Stopwatch' : 'Countdown Timer'}</h1>

      {/* Mode Toggle */}
      <div className={styles.modeToggle}>
        <button
          className={`${styles.modeButton} ${mode === 'stopwatch' ? styles.active : ''}`}
          onClick={() => handleModeChange('stopwatch')}
        >
          Stopwatch
        </button>
        <button
          className={`${styles.modeButton} ${mode === 'timer' ? styles.active : ''}`}
          onClick={() => handleModeChange('timer')}
        >
          Timer
        </button>
      </div>

      {/* Timer Input for Countdown */}
      {mode === 'timer' && (
        <div className={styles.inputRow}>
          <input
            className={styles.timeInput}
            type="number"
            min="0"
            placeholder="MM"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
          />
          <span className={styles.colon}>:</span>
          <input
            className={styles.timeInput}
            type="number"
            min="0"
            max="59"
            placeholder="SS"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
          />
        </div>
      )}

      {/* Display */}
      <div className={styles.timeDisplay}>{formatTime(time)}</div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.button} onClick={start}>Start</button>
        <button className={styles.button} onClick={stop}>Stop</button>
        <button className={styles.button} onClick={reset}>Reset</button>
      </div>
    </main>
  );
}
