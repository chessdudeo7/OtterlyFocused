'use client';

import { useState, useRef } from 'react';
import styles from './timer.module.css';

export default function TimerPage() {
  const [mode, setMode] = useState('stopwatch');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputTime, setInputTime] = useState({ hours: '', minutes: '', seconds: '' });

  const intervalRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const start = () => {
    if (isRunning) return;

    if (mode === 'timer') {
      if (isEditing) {
        const h = parseInt(inputTime.hours || '0', 10);
        const m = parseInt(inputTime.minutes || '0', 10);
        const s = parseInt(inputTime.seconds || '0', 10);
        const total = h * 3600 + m * 60 + s;
        if (isNaN(total) || total <= 0) return alert('Enter valid time');
        setTime(total);
        setIsEditing(false);
      }
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
    setInputTime({ hours: '', minutes: '', seconds: '' });
    setIsEditing(mode === 'timer');
  };

  const handleModeChange = (newMode) => {
    reset();
    setMode(newMode);
    setIsEditing(newMode === 'timer');
  };

  return (
    <main className={styles.timerPage}>
      <h1 className={styles.title}>🕒 {mode === 'stopwatch' ? 'Stopwatch' : 'Countdown Timer'}</h1>

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

      {/* Editable display for timer */}
      <div className={styles.timeDisplay} onClick={() => mode === 'timer' && !isRunning && setIsEditing(true)}>
        {mode === 'timer' && isEditing ? (
          <div className={styles.inlineInputs}>
            <input
              className={styles.inlineInput}
              type="number"
              placeholder="HH"
              value={inputTime.hours}
              onChange={(e) => setInputTime({ ...inputTime, hours: e.target.value })}
            />
            :
            <input
              className={styles.inlineInput}
              type="number"
              placeholder="MM"
              value={inputTime.minutes}
              onChange={(e) => setInputTime({ ...inputTime, minutes: e.target.value })}
            />
            :
            <input
              className={styles.inlineInput}
              type="number"
              placeholder="SS"
              value={inputTime.seconds}
              onChange={(e) => setInputTime({ ...inputTime, seconds: e.target.value })}
            />
          </div>
        ) : (
          <span>{formatTime(time)}</span>
        )}
      </div>

      <div className={styles.controls}>
        <button className={styles.button} onClick={start}>Start</button>
        <button className={styles.button} onClick={stop}>Stop</button>
        <button className={styles.button} onClick={reset}>Reset</button>
      </div>
    </main>
  );
}