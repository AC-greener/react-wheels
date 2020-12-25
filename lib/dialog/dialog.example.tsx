import React, { useState } from 'react';
import Dialog from './dialog';

const DialogExample: React.FunctionComponent = () => {
  const [visible, setVisible] =  useState(false)

  const handleOk = (e) => {
    setVisible(false)
  }

  const handleCancel = (e) => {
    setVisible(false)
  }

  return (
    <div>
      <button onClick={ () => setVisible(true)}>打开dialog</button>
      <Dialog
        width={ 800 }
        visible={ visible }
        onOk={ handleOk }
        onCancel={ handleCancel }
      />
    </div>
  )
}

export default DialogExample