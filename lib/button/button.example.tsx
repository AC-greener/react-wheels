import React from 'react';
import Button from './button';
import './button.example.scss'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div >
      <div >
        <h1>
          Contained Buttons 实心按钮
        </h1>
        <Button>default</Button>
        <Button color="primary">primary</Button>
        <Button color="info">info</Button>
        <Button color="green">green</Button>
        <Button color="rose">rose</Button>
        <Button color="purple">purple</Button>
        <Button className="custom">custom css</Button>
      </div>
      <div>
        <h1>
        Text Buttons 文本按钮
        </h1>
        <Button >222</Button>
      </div>
      <div>
        <h1>
        Outlined Buttons 描边按钮
        </h1>
        <Button className="aaa">111</Button>
      </div>
    </div>
  );
};

export default ButtonExample;