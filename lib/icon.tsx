import React from 'react'
import './icon.scss'
import './importicon.js'
import classes from './helper/classes'
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string,
  className?: string
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps)  => {
  const { className, name, ...restProps } = props
  return (
    <svg className={ classes('xui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
}

export default Icon