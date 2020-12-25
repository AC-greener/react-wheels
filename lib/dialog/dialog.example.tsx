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

  return (
    <div>
      <Dialog
        visible={ visible }
        onOk={ handleOk }
        onCancel={ handleCancel }
      />
    </div>
  )
}

export default DialogExample