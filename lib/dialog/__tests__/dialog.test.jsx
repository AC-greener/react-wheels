import renderer from 'react-test-renderer'
import React from 'react'
import Dialog from '../dialog'
import { mount, render  } from 'enzyme'
describe('Dialog ', () => {

  it('should render success', () => {
    const json = renderer.create(<Dialog/>).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('should recive prop: visible', () => {
    const component = mount(<Dialog visible={ true }/>)
    expect(component.props().visible).toEqual(true)
  })

  it('should recive prop: title', () => {
    const component = mount(<Dialog title='hello'/>)
    expect(component.props().title).toEqual('hello')
  })

  it('should recive prop: closable', () => {
    const component = mount(<Dialog closable={false}/>)
    expect(component.props().closable).toEqual(false)
  })

  // it('should close by method: onCancel', () => {
  //   const fn = jest.fn()
  //   const component = mount(<Dialog onCancel={fn}>123</Dialog>)
  //   component.find('.fake-modal-mask').simulate('click')
  //   expect(fn).toBeCalled()
  // })
  // it('should render content', () => {
  //   const component = mount(<Dialog >123</Dialog>)
  //   expect(component.contains('1223'))
  // })

})