const Expression = require("./Expression")

class Neg extends Expression {
  constructor(expression){
    super()
    if(expression > 0){
      this.expression = - expression
    } else {
      this.expression = expression
    }
    
  }

  eval(){
    return(this.expression)
  }

  print() {
    return(`${this.expression}`)
  }
}

module.exports = Neg