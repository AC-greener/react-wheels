import React from 'react'
import './input.scss'
import classes from '../helper/classes'
import { scopedClassMaker } from '../helper/index'

interface inputProps extends React.HTMLAttributes<HTMLInputElement> {
  variant?: string
}
const scopedClass = scopedClassMaker('fake-input')
const Input: React.FunctionComponent<inputProps> = (props: inputProps)  => {
  const { className, variant, ...restProps } = props
  const classResult = classes(
    scopedClass('root'),
    scopedClass(variant),
  )
  return (
    <div className={ classResult }>
      <label className="fake-input-label" htmlFor="">{ variant }</label>
      <div className={`fake-input-wrapper`}>
        <input
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
