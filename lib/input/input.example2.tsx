import React from 'react'
import Input from './input'
import './input.example.scss'

const InputExample = () => {
  return (
    <div>
      <div className="input-wrapper">
        <h1>Standard </h1>
        <Input variant="standard" />
        <Input variant="standard" label="Standard" />
        <Input variant="standard" label="Standard" defaultValue='Hello'  />
        <Input variant="standard" label="Standard" defaultValue='Disabled' disabled />
      </div>
    
    </div>
  )
}
export default InputExample