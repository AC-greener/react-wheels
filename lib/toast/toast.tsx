import React from 'react'
import './toast.scss'
import classes from '../helper/classes'

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean
}

const Totast: React.FunctionComponent<ToastProps> = (props: ToastProps)  => {
  const { className, ...restProps } = props
  const name = classes(
    className
  )
  return (
  <div className={ name } { ...restProps }>
    totast
  </div>
  )
}

Totast.defaultProps = {
  visible: false
}

export default Totast