import React, { useState } from 'react'
import Input from './input'
import './input.example.scss'

const InputExample = () => {
  const [x, setX] = useState('Cat')
  return (
    <div>
      <div className="input-wrapper">
        <h1>可控制的 VS 不可控制的 </h1>
        <Input label='Controlled' variant="outlined" value={x} onChange={(e) => setX(e.target.value)}/>
        <Input label='UnControlled' variant="outlined" defaultValue='Dog'/>
        <br/>
        <Input label='Controlled' variant="outlined" value={x} onChange={(e) => setX(e.target.value)}/>
        <Input label='UnControlled' variant="outlined" defaultValue='Dog'/>
      </div>
    </div>
  )
}
export default InputExample