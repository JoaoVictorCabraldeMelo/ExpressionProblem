class Expression {
  constructor(){
    if(this.print === undefined){
      throw new TypeError("Must implement print method")
    }
    if(new.target === Expression){
      throw new SyntaxError("You can't implement variables of Expression")
    }
  }

  eval() {}

  toString() {}
}

module.exports = Expression