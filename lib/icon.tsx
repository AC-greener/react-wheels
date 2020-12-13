import React from 'react'
import './icon.scss'
import './importicon.js'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps)  => {
  console.log({...props})
  return (
    <svg className='xui-icon' {...props}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  )
}

export default Icon