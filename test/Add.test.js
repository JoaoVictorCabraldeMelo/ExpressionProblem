const Number = require('../Literal')
const Add = require('../Add')

describe('Main section of adding two expressions', () => {
  test('should add two expressions', () => {
    let x = 21
    let y = 21
    let result = new Add(x,y)
    expect(result.eval()).toBe(42)
  })

  test('should print the expression', () => {
    let x = 2
    let y = 2
    let result = new Add(x,y)
    expect(result.print()).toMatch('2+2')
  })
  
})
