import React from 'react'
import Toast from './toast'


const ToastExample = () => {
  const handleClose = () => {
    console.log('close')
  }
  return (
    <div>
      <div>
        <h1>totast</h1>
        <Toast 
          visible={ true } 
          message="Note archived" 
          onClose={ handleClose }         
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        />
      </div>
    </div>
  )
  
}

export default ToastExample