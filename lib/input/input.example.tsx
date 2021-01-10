import React from 'react'
import Input from './input'

const InputExample = () => {
  return (
    <div>
      <div>
        <Input variant="standard" label="Standard" />
      </div>
      <br/>
      <div>
        <Input variant="outlined" label="Outlined" />
      </div>
    </div>
  )
}
export default InputExample