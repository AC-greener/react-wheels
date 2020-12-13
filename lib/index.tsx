import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import Icon from './icon'
function fn(e) {
  console.log(e.target)
}
console.log('hi')
ReactDOM.render(
<div>
  <Icon onClick={fn} name='wechat'/>
  <Icon name='qq'/>
  <Icon name='360'/>
</div>, document.getElementById('root'))
export { Button }