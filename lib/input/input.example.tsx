import React from 'react'
import Input from './input'
import './input.example.scss'

const InputExample = () => {

  return (
    <div>
      <div className="input-wrapper">
        <h1>Outlined </h1>
        <Input variant="outlined" label="Outlined" />
        <Input variant="outlined" label="Outlined" defaultValue='Hello'  />
        <Input variant="outlined" label="Disabled" defaultValue='hello' disabled />
      </div>
      <div className="input-wrapper">
        <h1>Standard </h1>
        <Input variant="standard" label="Standard" />
        <Input variant="standard" label="Standard" defaultValue='Hello'  />
        <Input variant="standard" label="Standard" defaultValue='hello' disabled />
      </div>
    </div>
  )
}
export default InputExample