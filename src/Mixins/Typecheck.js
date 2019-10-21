let typecheck = {
  typechecking(){
    if((typeof this.expRight.eval() !== "number"  
      || typeof this.expLeft.eval() !== "number") && (typeof expRight !== "number" 
      ||typeof this.expLeft !== "number")){
      throw TypeError("Trying to add variables that are not Numbers")
    }
  }
}

module.exports = typecheck