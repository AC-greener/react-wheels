import React from 'react'
import './importicon.js'
interface IconProps {
  name: string
}
const Icon:React.FunctionComponent<IconProps> = (props)  => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  )
}

export default Icon