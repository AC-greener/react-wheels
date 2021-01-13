import React from 'react'
import './collapse.scss'
interface panelProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string
}

const Panel: React.FunctionComponent<panelProps> = (props: panelProps) => {
  const { header } = props
  return (
    <div className="fake-collapse-item">
      <div className="fake-collapse-header">
        {
          header
        }
      </div>
      <div className="fake-collapse-content">
        {
          props.children
        }
      </div>
    </div>
  )
}

export default Panel