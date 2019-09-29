const Literal = require('../Literal')

describe('This section is for testing the Literal functionality', () => {
  test('should be a Literal 42', () => {
    let x = new Literal(42)
    expect(x.eval()).toBe(42)
  })
  test('should print the value of the Literal', () => {
    let x = new Literal(42)
    expect(x.print()).toMatch("42")
  })
  
})
