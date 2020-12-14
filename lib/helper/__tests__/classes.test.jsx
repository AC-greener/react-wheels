import classes from '../classes'
describe('classes', () => {
  it('接受1个className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })

  it('接受2个className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  
  it('接受各种奇怪的值', () => {
    const result = classes('a', false, undefined, null)
    expect(result).toEqual('a')
  })

  it('接受0个参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })

  it('接受数字', () => {
    const result = classes(1)
    expect(result).toEqual('1')
  })

})