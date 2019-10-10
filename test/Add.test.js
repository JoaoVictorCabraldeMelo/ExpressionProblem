const Number = require('../src/Literal/Literal')
const Add = require('../src/Add/Add')

describe('Main section of adding two expressions', () => {
  test('should add two Literal expressions', () => {
    let x = new Number(21)
    let y = new Number(21)
    let result = new Add(x,y)
    expect(result.eval()).toBe(42)
  })
  
  

  test('should print the expression', () => {
    let x = new Number(2)
    let y = new Number(2)
    let result = new Add(x,y)
    expect(result.print()).toMatch('2+2')
  })

  test('should throw an Error of adding variables that are not a number', () => {
    expect(() => {
      const x = "Darth"
      const y = "Vader"
      const result = new Add(x,y)
      return result.eval()
    }).toThrow(TypeError)
  })
  
  
})
