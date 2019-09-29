class Expression {
  constructor(){
    if(this.print === undefined){
      throw new TypeError("Must implement print method")
    }
  }

  eval() {}

  toString() {}
}

module.exports = Expression