import React from 'react';
import Button from './button';
import './button.example.scss'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div >
      <h1>
        Contained Buttons 实心按钮
      </h1>
      <Button type="contained">default</Button>
      <Button type="contained" disabled>disabled</Button>
      <Button type="contained" color="primary">primary</Button>
      <Button type="contained" color="info">info</Button>
      <Button type="contained" color="green">green</Button>
      <Button type="contained" color="rose">rose</Button>
      <Button type="contained" color="purple">purple</Button>
      <Button type="contained" className="custom">custom css</Button>
    </div>
  )
}

export default ButtonExample