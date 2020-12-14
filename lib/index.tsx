import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import Icon from './icon'

ReactDOM.render(
<div>
  <h3>color</h3>
  <Icon name="wechat"/>
  <Icon color="primary" name="wechat"/>
  <Icon color="secondary" name="wechat"/>
  <Icon color="action" name="wechat"/>
  <Icon color="disabled" name="wechat"/>
  <Icon style={{ color: 'green' }} name="wechat"/>
  <h3>size</h3>
  <Icon fontSize="small" name="wechat"/>
  <Icon name="wechat"/>
  <Icon fontSize="large" name="wechat"/>
  <Icon style={{ fontSize: 40 }} name="wechat"/>
</div>, document.getElementById('root'))
export { Button }