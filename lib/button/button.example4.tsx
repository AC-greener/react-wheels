import React from 'react';
import Button from './button';
import './button.example.scss'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div >
      <div >
        <h1>
          尺寸
        </h1>
        <Button type="contained" color="primary" size="small">small</Button>
        <Button type="contained" color="primary" size="default">default</Button>
        <Button type="contained" color="primary" size="large">large</Button>
      </div>
    </div>
  );
};

export default ButtonExample;