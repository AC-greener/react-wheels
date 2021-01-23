import React, { useState } from 'react';
import Dialog from './dialog';
import { Button } from '../index'
const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] =  useState(false)

  const handleOk = () => {
    setVisible(false)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleAfterClose = () => {
    console.log('after close')
  }

  return (
    <div>
      <h3>使用dialog组件</h3>
      <Button type='contained' color='rose' onClick={ () => setVisible(true)}>打开dialog</Button>
      <Dialog
        className='a b'
        title="Use Google's location service?"
        width={ 600 }
        visible={ visible }
        onOk={ handleOk }
        okText='DISAGREE'
        cancelText='AGREE'
        onCancel={ handleCancel }
        afterClose={ handleAfterClose }
      >
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </Dialog>
    </div>
  )
}

export default DialogExample