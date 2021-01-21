import React from 'react'
import './row.scss'
import classes from '../helper/classes'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter: string | number
}

const Row: React.FunctionComponent<RowProps> = (props)  => {
  const { className, children,  ...restProps } = props

  return (
    <div className={ classes('fake-row', className)} { ...restProps }>
      {
        children
      }
    </div>
  )
}


export default Row