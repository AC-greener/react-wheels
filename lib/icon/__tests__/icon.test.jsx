import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('Icon', () => {
  it('render success', () => {
    const json = renderer.create(<Icon/>).toJSON()
    //创建了一个快照
    expect(json).toMatchSnapshot()
  })

  it('可以传递name', () => {
    const json = renderer.create(<Icon name='wechat'/>).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('onClick', () => {
    let n = 1
    const fn = () => {n += 1}
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })

  it('fake onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="alipay" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})