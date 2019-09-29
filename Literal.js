const Expression = require('./Expression')

class Literal extends Expression {
  constructor(expression){
    super()
    this.expression = expression
  }

  eval() {
    return(this.expression)
  }

  print() {
    return(`${this.expression}`)
  }
}

module.exports = Literal;