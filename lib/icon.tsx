import React from 'react'
import './icon.scss'
import './importicon.js'
interface IconProps {
  name: string
}
const Icon:React.FunctionComponent<IconProps> = (props)  => {
  return (
      <svg className='xui-icon'>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
  )
}

export default Icon