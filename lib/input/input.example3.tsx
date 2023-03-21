import React from 'react'
import Input from './input'
import './input.example.scss'

const InputExample = () => {
  return (
    <div>
     
      <div className="input-wrapper">
        <h1>Size </h1>
        <Input variant="outlined" size='small' defaultValue="Small" label="size" />
        <Input variant="outlined" defaultValue="Normal" label="size" />
        <br/>
        <Input variant="standard" size='small' defaultValue="Small" label="size"/>
        <Input variant="standard" defaultValue="Normal" label="size"/>
      </div>
    
    </div>
  )
}
export default InputExample