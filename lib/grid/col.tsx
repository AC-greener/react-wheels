import React from 'react'
import './row.scss'
import classes from '../helper/classes'

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span: string | number
  offset?: string | number
}

const Col: React.FunctionComponent<ColProps> = (props)  => {
  const { className, children,  ...restProps } = props

  return (
    <div className={ classes('fake-col', className)} { ...restProps }>
      {
        children
      }
    </div>
  )
}


export default Col