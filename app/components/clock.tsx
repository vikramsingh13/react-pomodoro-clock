'use client';
import React, { useState, useEffect } from 'react';

type ClockProps = {
  seconds: number;
  isRunning: boolean;
  toggleReset: () => void;
  isReset: boolean;
};

const Clock: React.FC<ClockProps> = ({seconds, isRunning, toggleReset, isReset}) => {
  const [time, setTime] = useState(seconds);

  // handles the countdown timer
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    else if(!isRunning && !isReset) {
      setTime(seconds);
      toggleReset();
    }
  }, [seconds, isRunning, isReset, toggleReset]);

  const formatTime = (time: number) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes} : ${seconds}`;
  }

  return (
    <div className="text-6xl">{ formatTime(time) }</div>
  )
};

export default Clock;