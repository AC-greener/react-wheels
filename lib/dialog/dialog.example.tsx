import React, { useState } from 'react';
import Dialog, { alert } from './dialog';

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
      <button onClick={ () => setVisible(true)}>打开dialog</button>
      <button onClick={ () => alert({content: 'hello world', title: '2020'})}>一句话打开dialog</button>
      <Dialog
        title="Use Google's location service?"
        width={ 600 }
        visible={ visible }
        onOk={ handleOk }
        okText='确定吗'
        onCancel={ handleCancel }
        afterClose={ handleAfterClose }
      >
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </Dialog>
    </div>
  )
}

export default DialogExample