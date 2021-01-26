import React from 'react';
import{ alert } from './dialog';
import { Button } from '../index'
const DialogExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>更简洁的方式</h3>
      <Button type='contained' color='rose' onClick={ () => alert({content: 'hello world', title: '2020'})}>一句话打开dialog</Button>
    </div>
  )
}

export default DialogExample