import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] =  useState(true)

  const handleOk = (e) => {
    setVisible(false)
  }

  const handleCancel = (e) => {
    setVisible(false)
  }
  console.log(confirm)
  return (
    <div>
      <button onClick={ () => setVisible(true)}>打开dialog</button>
      <Dialog
        title="Use Google's location service?"
        width={ 600 }
        visible={ visible }
        onOk={ handleOk }
        okText='确定吗'
        onCancel={ handleCancel }
      >
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </Dialog>
    </div>
  )
}

export default DialogExample