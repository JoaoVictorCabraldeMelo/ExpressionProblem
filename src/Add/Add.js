const Expression = require('../Expression/Expression')
const Number = require('../Literal/Literal') 

class Add extends Expression {
  constructor(expLeft, expRight){
    super()
    this.expLeft = expLeft
    this.expRight = expRight
  }

  print() {
    this.typecheck()
    if(typeof this.expRight === "number" && typeof this.expLeft === "number"){
      return(`${this.expLeft}+${this.expRight}`)
    } else {
      return(`${this.expRight.eval()}+${this.expLeft.eval()}`)
    }
  }

  eval() {
    this.typecheck()
    if(typeof this.expRight === "number" && typeof this.expLeft === "number"){
      return(this.expLeft +  this.expRight)
    } else {
      return(this.expRight.eval() + this.expLeft.eval())
    }
  }

  typecheck(){
    if((typeof this.expRight.eval() !== "number"  
      || typeof this.expLeft.eval() !== "number") && (typeof expRight !== "number" 
      ||typeof this.expLeft !== "number")){
      throw TypeError("Trying to add variables that are not Numbers")
    }
  }
  
}


module.exports = Add;