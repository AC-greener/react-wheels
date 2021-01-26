import React from 'react';
import Button from './button';
import './button.example.scss'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div >
      <h1>
      Text Buttons 文本按钮
      </h1>
      <Button >default</Button>
      <Button disabled>disabled</Button>
      <Button color="primary">primary</Button>
      <Button color="info">info</Button>
      <Button color="green">green</Button>
      <Button color="rose">rose</Button>
      <Button color="purple">purple</Button>
      <Button className="text-custom">custom css</Button>
    </div>
  );
};

export default ButtonExample;