import React from 'react'
import './input.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface inputProps extends React.HTMLAttributes<HTMLInputElement> {
 
}
const scopedClass = scopedClassMaker('fake-input')
const Input: React.FunctionComponent<inputProps> = (props: inputProps)  => {
  const { className, ...restProps } = props
  const classResult = classes(
    scopedClass(),
  )
  return (
    <input 
      className={ classResult } 
      { ...restProps } 
      type="text" name="" id=""/>
  )
}

Input.defaultProps = {

}


export default Input
