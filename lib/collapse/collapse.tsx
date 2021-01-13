import React from 'react'
// import { scopedClassMaker } from '../helper/index'
// import classes from '../helper/classes'
import './collapse.scss'
interface collapseProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultActiveKey: Array<string>
}

const Collapse: React.FunctionComponent<collapseProps> = (props: collapseProps) => {
  return (
    <div className="fake-collapse">
      {
        props.children
      }
    </div>
  )
}

export default Collapse