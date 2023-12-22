import React from 'react';

// Controls should take in functions as props
// to handle the start, stop, and reset actions
type ControlsProps = {
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
  toggleEdit: () => void;
};

const Controls: React.FC<ControlsProps> = ({handleStart, handlePause, handleReset, toggleEdit}) => {
  return (
    <div className="flex flex-row justify-center items-center text-center [&>*]:p-2 [&>*]:m-2">
      <button onClick={handleStart} className="bg-green-400 rounded text-black text-2xl">Start</button>
      <button onClick={handlePause} className="bg-blue-300 rounded text-black text-2xl">Pause</button>
      <button onClick={handleReset} className="bg-red-300 rounded text-black text-2xl">Reset</button>
      <button onClick={toggleEdit} className="bg-yellow-300 rounded text-black text-2xl">Edit</button>
    </div>
  )
};

export default Controls;