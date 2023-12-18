'use client';

import React, { useState, useEffect } from 'react';
import Clock from './components/clock';
import Controls from './components/controls';

export default function Home() {
  const defaultTime = 1800;
  const [time, setTime] = useState(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    console.log('start');
  };

  const handlePause = () => {
    setIsRunning(false);
    console.log('pause');
  }

  const setDefaultTime = () => {
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
      <div>React Pomodoro Clock</div>

      <Clock seconds={time} isRunning={isRunning} toggleReset={toggleReset} isReset={isReset}/>

      <Controls handleStart={handleStart} handlePause={handlePause} handleReset={setDefaultTime} toggleEdit={toggleEdit}/>


    </main>
  )
}
