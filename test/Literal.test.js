const Literal = require('../src/Literal/Literal')

describe('This section is for testing the Literal functionality', () => {
  test('should be a Literal 42', () => {
    let x = new Literal(42.0)
    expect(x.eval()).toBe(42.0)
  })
  test('should print the value of the Literal', () => {
    let x = new Literal(42)
    expect(x.print()).toMatch("42")
  })

  test('should test if throw an error', () => {
    expect(() => {
      let x = new Literal('x')
      x.eval()
    }).toThrow(TypeError)
  })
  
  
})
