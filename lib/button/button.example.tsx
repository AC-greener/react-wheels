import React from 'react';
import Button from './button';
import { Icon } from '../index'
import './button.example.scss'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div >
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
      <div>
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
      <div >
        <h1>
          尺寸
        </h1>
        <Button type="contained" color="primary" size="small">small</Button>
        <Button type="contained" color="primary" size="default">default</Button>
        <Button type="contained" color="primary" size="large">large</Button>
      </div>
      <div >
        <h1>
          带Icon的按钮
        </h1>
        <Button 
          icon={<Icon name='wechat'/>} 
          type="contained" 
          color="primary" 
          size="small">wechat</Button>
        <Button 
          icon={<Icon name='wechat'/>} 
          type="contained" 
          color="rose" 
          size="small">wechat</Button>
             <Button 
          icon={<Icon name='wechat'/>} 
          iconposition='left'
          type="contained" 
          color="primary" 
          size="default">wechat</Button>
      </div>
    </div>
  );
};

export default ButtonExample;