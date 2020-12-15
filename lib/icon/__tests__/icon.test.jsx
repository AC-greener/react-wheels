import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'
describe('Icon', () => {

  it('should render success', () => {
    const json = renderer.create(<Icon name='wechat'/>).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('should recive prop: name', () => {
    const component = mount(<Icon name="alipay"/>)
    expect(component.props().name).toEqual("alipay")
    component.setProps({name: "wechat"})
    expect(component.props().name).toEqual("wechat")
  })

  it('should render with primary color', () => {
    const component = mount(<Icon color="primary"/>)
    expect(component.find('svg').hasClass("color-primary")).toEqual(true)
  })

  it('should clicked', () => {
    let n = 1
    const fn = () => {n += 1}
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })

  it('should fake clicked', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})