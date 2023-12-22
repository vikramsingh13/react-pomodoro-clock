import React, { useState, useEffect } from 'react';

type SettingsProps = {
  isEditing: boolean;
  defaultTime: number;
  setDefaultTime: (time: number) => void;
};

const Settings: React.FC<SettingsProps> = ({ isEditing, defaultTime, setDefaultTime }) => {
  const [minutes, setMinutes] = useState(Math.floor(defaultTime / 60).toString());

  useEffect(() => {
    setMinutes(Math.floor(defaultTime / 60).toString());
  }, [defaultTime]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    try {
      let numberOfMinutes = parseInt(inputValue);
      if (isNaN(numberOfMinutes)) {
        console.log(`settings::handleInputChange error: ${inputValue} is not a number`);
      } else {

        // Make sure the number of minutes is between 0 and 60
        numberOfMinutes = numberOfMinutes < 0
          ? 0
          : numberOfMinutes > 60
            ? 60
            : numberOfMinutes;

            // Convert back to seconds and update the defaultTime
        const numberOfSeconds = numberOfMinutes * 60;

        setDefaultTime(numberOfSeconds); 
      }
    } catch (err) {
      console.log(`settings::handleInputChange: While parsing Minutes input encountered error: ${err}`);
    }
  };

  // used to toggle the visibility of the settings
  let visibility = isEditing ? 'visible' : 'hidden';

  return (
    <div className={visibility}>
      <label>Minutes:</label>
      <input
        type="number"
        placeholder="Minutes"
        onChange={handleInputChange}
        value={minutes}
        className="text-black text-2xl"
      />
    </div>
  );
};

export default Settings;
