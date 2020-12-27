import React from 'react'
import './button.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string
}
const scopedClass = scopedClassMaker('fake-button')
const Icon: React.FunctionComponent<buttonProps> = (props: buttonProps)  => {
  const { className, color, ...restProps } = props

  const classResult = classes(scopedClass(), className, "fake-radius", color)
  return (
    <button type="button" className={classResult} {...restProps}>
      <span>{ props.children }</span>
    </button>
  )
}


export default Icon
