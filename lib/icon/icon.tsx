import React from 'react'
import './icon.scss'
import './importicon.js'
import classes from '../helper/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string,
  color?: string
  fontSize?: string
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps)  => {
  const { className, color, fontSize, name, ...restProps } = props
  console.log(restProps)

  return (
    <svg className={ classes('xui-icon', className, color ? `color-${color}`: '', fontSize? `size-${fontSize}`: '')} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
}


export default Icon