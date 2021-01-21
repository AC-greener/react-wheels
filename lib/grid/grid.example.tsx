import React from 'react'
import Row from './row'
import Col from './col'
const x = () => {
  return <div>
    <Row gutter="16">
      <Col span={6}></Col>   
      <Col span={6}></Col>   
      <Col span={6}></Col>   
      <Col span={6}></Col>   
    </Row>
    <Row gutter="16">
      <Col span={12}></Col>   
      <Col span={12}></Col>   
    </Row>
  </div>
}
export default x
