import React from 'react'
import './button.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {

}
const scopedClass = scopedClassMaker('fake-button')
const Icon: React.FunctionComponent<buttonProps> = (props: buttonProps)  => {
  const { className, ...restProps } = props

  const classResult = classes(scopedClass(), className)
  return (
    <button className={classResult} {...restProps}>
      123
    </button>
  )
}


export default Icon