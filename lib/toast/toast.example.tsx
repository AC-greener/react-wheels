import React, { useState } from 'react'
import Toast from './toast'
import { Button } from '../index'

const ToastExample = () => {
  const handleClose = () => {
    console.log('close')
    setVisible(false)
  }
  const [visible, setVisible] = useState(false)
  const [vertical, setVertical] = useState('top')
  const [horizontal, setHorizontal] = useState('right')
  return (
    <div>
      <div>
        <h1>totast</h1>
        <Button type='contained' onClick={() => {
          setVisible(true)
          setVertical('top')
          setHorizontal('left')
        }}>
          TOP LEFT
        </Button>
        <Button type='contained' onClick={() => {
          setVisible(true)
          setVertical('top')
          setHorizontal('center')
        }}>
          TOP CENTER
        </Button>
        <Button type='contained' onClick={() => {
          setVisible(true)
          setVertical('top')
          setHorizontal('right')
        }}>
          TOP RIGHT
        </Button>
        <Button type='contained' onClick={() => {
          setVisible(true)
          setVertical('bottom')
          setHorizontal('left')
        }}>
          BOTTOM LEFT
        </Button>
        <Button type='contained' onClick={() => {
          setVisible(true)
          setVertical('bottom')
          setHorizontal('center')
        }}>
          BOTTOM CENTER
        </Button>
        <Button type='contained' onClick={() => {
          setVisible(true)
          setVertical('bottom')
          setHorizontal('right')
        }}>
          BOTTOM RIGHT
        </Button>

        <Toast 
          visible={ visible } 
          message="Note archived" 
          onClose={ handleClose }         
          anchorOrigin={{
            vertical,
            horizontal,
          }}
        />
      
      </div>
    </div>
  )
  
}

export default ToastExample