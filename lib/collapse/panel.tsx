import React from 'react'
import './collapse.scss'
import classes from '../helper/classes'
interface panelProps extends React.HTMLAttributes<HTMLDivElement> {
  activeKey: string
  header: string
  defaultActiveKey?: Array<string>
  headerAction?: (action: string, payload: string) => void
}

const Panel: React.FunctionComponent<panelProps> = (props: panelProps) => {
  const { header, defaultActiveKey, activeKey, headerAction, ...restProps } = props
  const handleHeaderClick: React.MouseEventHandler = (e) => {
    // 吧自己的key通知给父组件
    console.log('发射headerAction')
    headerAction && headerAction('COLLAPSE_ACTION', activeKey)
  }
  return (
    <div className="fake-collapse-item" { ...restProps }>
      <div className="fake-collapse-header" onClick={ handleHeaderClick }>
        { header }
      </div>
      <div className={ classes(
        "fake-collapse-content",
        defaultActiveKey?.includes(activeKey)? 'fake-collapse-content-active' : ''
      )}>
        {
          props.children
        }
      </div>
    </div>
  )
}

export default Panel