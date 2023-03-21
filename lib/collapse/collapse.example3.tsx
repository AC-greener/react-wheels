
import React from 'react'
import Collapse from './collapse'
import Panel from './panel'
const CollapseExample = () => {
  return (
    <div>
      <div>
        <h1>只能展开一个面板</h1>
        <Collapse defaultActiveKey={['2']} accordion>
          <Panel header="This is panel header 1" activeKey="1">
            <p>111</p>
          </Panel>
          <Panel header="This is panel header 2" activeKey="2">
            <p>222</p>
          </Panel>
          <Panel header="This is panel header 3" activeKey="3">
            <p>333</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default CollapseExample
