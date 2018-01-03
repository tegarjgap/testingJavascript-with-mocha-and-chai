function cookie(x){
    if (x === String(x)){
      return x
    }
    else if (parseInt(x)){
      return x
    }else if(isNaN(x)){
      return x
    }else{
      return x
    }
  }

module.exports = cookie