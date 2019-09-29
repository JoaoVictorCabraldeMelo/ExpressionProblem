const Expression = require('./Expression')

class Add extends Expression {
  constructor(expLeft, expRight){
    super()
    this.expLeft = expLeft
    this.expRight = expRight
  }

  print() {
    return(`${this.expLeft}+${this.expRight}`)
  }

  eval() {
    return(this.expLeft +  this.expRight)
  }
}


module.exports = Add;