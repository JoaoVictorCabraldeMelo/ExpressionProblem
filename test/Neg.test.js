const Neg =require('../Neg')

describe('Main section of Negative numbers', () => {
  test('should evaluate the negative number', () => {
    let x = 42
    let result = new Neg(x)
    expect(result.eval()).toBe(-42)
  })

  test('should print in string the negative number', () => {
    let x = -42
    let result = new Neg(x)
    expect(result.print()).toMatch("-42")
  })
  
  
})
