'use client';

import React, { useState, useEffect } from 'react';
import Clock from './components/clock';
import Controls from './components/controls';
import Settings from './components/settings';

export default function Home() {
  const [defaultTime, setDefaultTime] = useState(1800);
  const [time, setTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    handleReset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultTime]);

  const handleStart = () => {
    setIsRunning(true);
    console.log('start');
  };

  const handlePause = () => {
    setIsRunning(false);
    console.log('pause');
  }

  const handleReset = () => {
    setTime(defaultTime);
    handlePause();
    toggleReset();
    console.log('default time', time);
  }

  const toggleReset = () => {
    setIsReset(!isReset);
    console.log('reset time', time);
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    console.log('edit');
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 [&>*]:m-6">
      <div className="text-3xl">React Pomodoro Clock</div>

      <Clock seconds={time} isRunning={isRunning} toggleReset={toggleReset} isReset={isReset}/>

      <Controls handleStart={handleStart} handlePause={handlePause} handleReset={handleReset} toggleEdit={toggleEdit}/>

      <Settings isEditing={isEditing} defaultTime={defaultTime} setDefaultTime={setDefaultTime} />

      <footer className="mt-auto">
        <a href="https://vikramsingh.tech" target="_blank">
          Vikram Singh &copy;2021-2024
        </a>
      </footer>



    </main>
  )
}
