import React, { useState } from 'react'
import Input from './input'
import './input.example.scss'

const InputExample = () => {
  const [x, setX] = useState('Cat')
  return (
    <div>
      <div className="input-wrapper">
        <h1>Outlined </h1>
        <Input variant="outlined" />
        <Input variant="outlined" label="Outlined" />
        <Input variant="outlined" label="Outlined" defaultValue='Hello'  />
        <Input variant="outlined"  label="Disabled" defaultValue='Disabled' disabled />
      </div>
      <div className="input-wrapper">
        <h1>Standard </h1>
        <Input variant="standard" />
        <Input variant="standard" label="Standard" />
        <Input variant="standard" label="Standard" defaultValue='Hello'  />
        <Input variant="standard" label="Standard" defaultValue='Disabled' disabled />
      </div>
      <div className="input-wrapper">
        <h1>Size </h1>
        <Input variant="outlined" size='small' defaultValue="Small" label="size" />
        <Input variant="outlined" defaultValue="Normal" label="size" />
        <br/>
        <Input variant="standard" size='small' defaultValue="Small" label="size"/>
        <Input variant="standard" defaultValue="Normal" label="size"/>
      </div>
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