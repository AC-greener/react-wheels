import React from 'react';
import Rate from './rate';

const MyComponent = () => {
  return (
    <div>
      <h1>readOnly</h1>
      <Rate count={5} value={3} readOnly />
      <Rate count={5} value={3} readOnly color='red'/>
    </div>
  );
};

export default MyComponent;
