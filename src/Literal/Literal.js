const Expression = require('../Expression/Expression')

class Literal extends Expression {
  constructor(expression){
    super()
    this.expression = expression
  }

  eval() {
    this.typecheck()
    return(this.expression)
  }

  print() {
    return(`${this.expression}`)
  }

  typecheck(){
    if (typeof this.expression !== "number"){
      throw TypeError ("Literal can not be instanciated without a Number")
    }
  }
}

module.exports = Literal;