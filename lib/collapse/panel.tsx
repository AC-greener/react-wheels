import React from 'react'
import './collapse.scss'
import classes from '../helper/classes'
import { Icon } from '../index'
interface panelProps extends React.HTMLAttributes<HTMLDivElement> {
  activeKey: string
  header: string
  defaultActiveKey?: Array<string>
  headerAction?: (action: string, payload: string) => void
}

const Panel: React.FC<panelProps> = (props: panelProps) => {
  const { header, defaultActiveKey, activeKey, headerAction, ...restProps } = props
  const handleHeaderClick: React.MouseEventHandler = (e) => {
    // 吧自己的key通知给父组件
    // console.log('发射headerAction')
    headerAction && headerAction('COLLAPSE_ACTION', activeKey)
  }
  return (
    <div className="fake-collapse-item" { ...restProps }>
      <div className="fake-collapse-header" onClick={ handleHeaderClick }>
        <span className={ classes(defaultActiveKey?.includes(activeKey)? 'fake-collapse-icon-active' : '') }>
          <Icon name='collapse' style={{fontSize: '26px'}} />
        </span>
        { header }
      </div>
      <div className={ classes(
        "fake-collapse-content",
        defaultActiveKey?.includes(activeKey)? 'fake-collapse-content-active' : ''
      )}>
        { props.children }
      </div>
    </div>
  )
}

export default Panel