import React from 'react';
import Button from './button';
import { Icon } from '../index'
import './button.example.scss'
const ButtonExample: React.FC = () => {
  return (
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
  )
}

export default ButtonExample