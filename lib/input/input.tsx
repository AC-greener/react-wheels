import React, { useRef } from 'react'
import './input.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface inputProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: string
  label?: string
}
const scopedClass = scopedClassMaker('fake-input')
const Input: React.FunctionComponent<inputProps> = (props: inputProps)  => {
  const { className, variant, label, onFocus,onBlur, ...restProps } = props
  const labelRef = useRef(null);
  const classResult = classes(
    scopedClass('root'),
    scopedClass(variant),
  )
  const handleFucus = (e) => {
    onFocus && onFocus(e)
    if(labelRef.current != null) {
      labelRef.current.classList.toggle('fake-input-fucus')
    }
  }
  const handleBlur = (e) => {
    onBlur && onBlur(e)
    if(labelRef.current != null) {
      labelRef.current.classList.toggle('fake-input-fucus')
    }
    if(e.target.value) {
      labelRef.current.classList.add('fake-input-hasvalue')
    } else {
      labelRef.current.classList.remove('fake-input-hasvalue')
    }
  }

  return (
    <div ref={ labelRef } className={ classResult }>
      <label  className="fake-input-label" htmlFor="">{ label }</label>
      <div className={`fake-input-wrapper`}>
        <input
          onFocus={ handleFucus }
          onBlur={ (e) => handleBlur(e) }
          className='fake-input' 
          { ...restProps } 
          type="text"
        />
      </div>
    </div>

  )
}

Input.defaultProps = {
  variant: 'standard'
}


export default Input
