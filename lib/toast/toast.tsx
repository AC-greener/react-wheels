import React from 'react'
import './toast.scss'
import classes from '../helper/classes'
import { Icon } from '../index'

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
  message?: string
  onClose?: React.MouseEventHandler
  anchorOrigin: {
    vertical: string
    horizontal: string
  }
}

const Totast: React.FunctionComponent<ToastProps> = (props: ToastProps)  => {
  const { className, message, onClose, anchorOrigin, visible, ...restProps } = props
  const name = classes(
    'fake-toast-root',
    `fake-toast-${anchorOrigin.vertical}-${anchorOrigin.horizontal}`,
    className
  )
  const handleClick: React.MouseEventHandler = (e) => {
    onClose && onClose(e)
  }
  return (
    visible ? 
      <div className={ name } { ...restProps }>
      <div className='fake-toast-message'>
        { message }
      </div>
      <div className='fake-toast-action' onClick={ handleClick }>
        <Icon name='close'/>
      </div>
    </div>
    : null
  )
}

Totast.defaultProps = {
  visible: false
}

export default Totast