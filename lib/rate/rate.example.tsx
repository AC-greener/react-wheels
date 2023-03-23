import React, { useState } from 'react';
import Rate from './rate';

const MyComponent = () => {
  const [value, setValue] = useState(3);

  const handleRateChange = (newValue) => {
    setValue(newValue);
    console.log(`Selected rate: ${newValue}`);
  };

  return (
    <div>
      <h1>My Component</h1>
      <Rate count={5} color='red' size={20} value={value} onChange={handleRateChange} />
    </div>
  );
};

export default MyComponent;
