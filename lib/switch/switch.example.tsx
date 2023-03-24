import React, { useState } from 'react';
import Switch from './switch';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h2>Toggle Switch</h2>
      <Switch checked={isChecked}  onChange={handleSwitchChange} />
    </div>
  );
}
