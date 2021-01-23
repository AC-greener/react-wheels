import React from 'react';
import Button from './button';
import './button.example.scss'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <h1>
      Outlined Buttons 描边按钮
      </h1>
      <Button type="outlined">default</Button>
      <Button type="outlined" disabled>disabled</Button>
      <Button type="outlined" color="primary">primary</Button>
      <Button type="outlined" color="info">info</Button>
      <Button type="outlined" color="green">green</Button>
      <Button type="outlined" color="rose">rose</Button>
      <Button type="outlined" color="purple">purple</Button>
      <Button type="outlined" className="outlined-custom">custom css</Button>
    </div>
  )
}

export default ButtonExample