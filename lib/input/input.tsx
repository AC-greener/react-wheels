import React, { useRef, useEffect } from 'react'
import './input.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface inputProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: string
  label?: string
  disabled?: boolean
  defaultValue?: string
}
const scopedClass = scopedClassMaker('fake-input')
const Input: React.FunctionComponent<inputProps> = (props: inputProps)  => {
  const {
    className, 
    variant, 
    label, 
    onFocus,
    onBlur, 
    disabled,
    defaultValue,
    ...restProps 
  } = props
  const labelRef: any = useRef(null)
  const inputRef: any = useRef(null)
  const classResult = classes(
    scopedClass('root'),
    scopedClass(variant),
    disabled ? scopedClass("disabled") : ''
  )
  const handleFucus = (e) => {
    onFocus && onFocus(e)
    labelRef.current.classList.toggle('fake-input-fucus')
  }
  const handleBlur = (e) => {
    onBlur && onBlur(e)
    labelRef.current.classList.toggle('fake-input-fucus')
    if(e.target.value) {
      labelRef.current.classList.add('fake-input-hasvalue')
    } else {
      labelRef.current.classList.remove('fake-input-hasvalue')
    }
  }
  useEffect(() => {
    if(defaultValue) {
      labelRef.current.classList.add('fake-input-hasvalue')
      inputRef.current.value = defaultValue
    }
  })

  return (
    <div ref={ labelRef } className={ classResult }>
      <label className={ scopedClass("label") }  htmlFor="">{ label }</label>
      <div className={scopedClass("wrapper")}>
        <input
          ref={ inputRef }
          disabled={ disabled }
          onFocus={ handleFucus }
          onBlur={ (e) => handleBlur(e) }
          className={ scopedClass() } 
          { ...restProps } 
          type="text"
        />
      </div>
    </div>
  )
}

Input.defaultProps = {
  variant: 'standard',
  disabled: false
}


export default Input
