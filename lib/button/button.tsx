import React from 'react'
import './button.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string
  type?: string
}
const scopedClass = scopedClassMaker('fake-button')
const Icon: React.FunctionComponent<buttonProps> = (props: buttonProps)  => {
  const { className, color, type, ...restProps } = props
  const classResult = classes(
    scopedClass(),
    `fake-${type ? type : "text"}`,
    className, "fake-radius",
    color ? `fake-${type ? type : "text"}-${color}`: ""
  )
  return (
    <button type="button" className={classResult} {...restProps}>
      <span>{ props.children }</span>
    </button>
  )
}


export default Icon
