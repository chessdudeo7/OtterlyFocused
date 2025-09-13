'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './timer.module.css';

export default function TimerPage() {
  const [mode, setMode] = useState('stopwatch');
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Track inputs as strings to allow direct editing with leading zeros
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const intervalRef = useRef(null);

  // Helper: convert h/m/s strings to total seconds
  const getTotalSeconds = () => {
    const h = parseInt(hours, 10) || 0;
    const m = parseInt(minutes, 10) || 0;
    const s = parseInt(seconds, 10) || 0;
    return h * 3600 + m * 60 + s;
  };

  // Helper: format seconds to HH MM SS strings (with leading zeros)
  const formatTimeParts = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return {
      h: String(h).padStart(2, '0'),
      m: String(m).padStart(2, '0'),
      s: String(s).padStart(2, '0'),
    };
  };

  // Start timer or stopwatch
  const start = () => {
    if (isRunning) return;

    if (mode === 'timer') {
      const total = getTotalSeconds();
      if (total <= 0) {
        alert('Please enter a valid time greater than 0');
        return;
      }
      setTime(total);
    }

    setIsRunning(true);
  };

  // Stop the timer/stopwatch
  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Reset timer/stopwatch
  const reset = () => {
    stop();
    if (mode === 'stopwatch') {
      setTime(0);
      setHours('00');
      setMinutes('00');
      setSeconds('00');
    } else {
      // Reset to last input time for timer mode
      const total = getTotalSeconds();
      setTime(total);
    }
  };

  // Mode change handler
  const handleModeChange = (newMode) => {
    reset();
    setMode(newMode);
    if (newMode === 'stopwatch') {
      setHours('00');
      setMinutes('00');
      setSeconds('00');
      setTime(0);
    }
  };

  // Effect: run timer or stopwatch interval
  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (mode === 'stopwatch') {
          const newTime = prevTime + 1;
          const { h, m, s } = formatTimeParts(newTime);
          setHours(h);
          setMinutes(m);
          setSeconds(s);
          return newTime;
        } else {
          // Timer counts down
          if (prevTime <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          const newTime = prevTime - 1;
          const { h, m, s } = formatTimeParts(newTime);
          setHours(h);
          setMinutes(m);
          setSeconds(s);
          return newTime;
        }
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  // When inputs change (only for timer mode and if not running), update time state
  useEffect(() => {
    if (mode === 'timer' && !isRunning) {
      setTime(getTotalSeconds());
    }
  }, [hours, minutes, seconds, mode, isRunning]);

  // Input change handler: accept only digits, max 2 chars
  const handleInputChange = (setter) => (e) => {
    let val = e.target.value;
    val = val.replace(/\D/g, ''); // Remove non-digit
    if (val.length > 2) val = val.slice(0, 2);
    setter(val);
  };

  // Disable inputs in stopwatch mode or when running
  const inputsDisabled = mode === 'stopwatch' || isRunning;

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

      {/* Editable inline inputs for time */}
      <div className={styles.timeDisplay}>
        <input
          className={styles.inlineInput}
          type="text"
          maxLength={2}
          value={hours}
          onChange={handleInputChange(setHours)}
          disabled={inputsDisabled}
          aria-label="Hours"
        />
        <span>:</span>
        <input
          className={styles.inlineInput}
          type="text"
          maxLength={2}
          value={minutes}
          onChange={handleInputChange(setMinutes)}
          disabled={inputsDisabled}
          aria-label="Minutes"
        />
        <span>:</span>
        <input
          className={styles.inlineInput}
          type="text"
          maxLength={2}
          value={seconds}
          onChange={handleInputChange(setSeconds)}
          disabled={inputsDisabled}
          aria-label="Seconds"
        />
      </div>

      <div className={styles.controls}>
        {!isRunning ? (
          <button className={styles.button} onClick={start}>
            Start
          </button>
        ) : (
          <button className={styles.button} onClick={stop}>
            Stop
          </button>
        )}
        <button className={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </main>
  );
}