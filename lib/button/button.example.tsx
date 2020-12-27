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
        <Button type="contained">default</Button>
        <Button type="contained" color="primary">primary</Button>
        <Button type="contained" color="info">info</Button>
        <Button type="contained" color="green">green</Button>
        <Button type="contained" color="rose">rose</Button>
        <Button type="contained" color="purple">purple</Button>
        <Button type="contained" className="custom">custom css</Button>
      </div>
      <div>
        <h1>
        Text Buttons 文本按钮
        </h1>
        <Button >default</Button>
        <Button color="primary">primary</Button>
        <Button color="info">info</Button>
        <Button color="green">green</Button>
        <Button color="rose">rose</Button>
        <Button color="purple">purple</Button>
        <Button className="text-custom">custom css</Button>
      </div>
      <div>
        <h1>
        Outlined Buttons 描边按钮
        </h1>
        {/* <Button >default</Button> */}
      </div>
    </div>
  );
};

export default ButtonExample;