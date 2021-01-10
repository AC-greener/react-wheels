import React from 'react'
import Input from './input'
import './input.example.scss'

const InputExample = () => {
  const handleChange = (e) => {
    console.log(e)
  }
  return (
    <div>
      <div>
        {/* <Input variant="standard" label="Standard" /> */}
      </div>
      <br/>
      <div className="input-wrapper">
        <h1>Outlined </h1>
        <Input variant="outlined" label="Outlined" />
        <Input variant="outlined" label="Outlined" onChange={ (e) => handleChange(e) } />
        <Input variant="outlined" label="Outlined" defaultValue='Hello'  />
        <Input variant="outlined" label="Disabled" defaultValue='hello' disabled />
      </div>
    </div>
  )
}
export default InputExample