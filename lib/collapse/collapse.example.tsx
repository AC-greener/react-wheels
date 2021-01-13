
import React from 'react'
import Collapse from './collapse'
import Panel from './panel'
const CollapseExample = () => {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header="This is panel header 1" key="1">
        <p>111</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>222</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>333</p>
      </Panel>
    </Collapse>
  )
}

export default CollapseExample
