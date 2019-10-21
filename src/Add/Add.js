const Expression = require('../Expression/Expression')
const typecheck = require('../Mixins/Typecheck')
class Add extends Expression {
  constructor(expLeft, expRight){
    super()
    this.expLeft = expLeft
    this.expRight = expRight
    Object.assign(Add.prototype, typecheck)
  }

  print() {
    this.typechecking()
    if(typeof this.expRight === "number" && typeof this.expLeft === "number"){
      return(`${this.expLeft}+${this.expRight}`)
    } else {
      return(`${this.expRight.eval()}+${this.expLeft.eval()}`)
    }
  }

  eval() {
    this.typechecking()
    if(typeof this.expRight === "number" && typeof this.expLeft === "number"){
      return(this.expLeft +  this.expRight)
    } else {
      return(this.expRight.eval() + this.expLeft.eval())
    }
  }


  
}


module.exports = Add;