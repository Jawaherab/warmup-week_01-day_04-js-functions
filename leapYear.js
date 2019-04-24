const isLeapYear = function (year) {
    if (year % 4 ===0) {
       
     if (year % 100 ==0 ) { 
     
    if (year % 400 ===0){
         return "true"
} else {return false }
} else if (year %100 !== 0){
         return "true"
}
    }  else {
return "fales"
}
}





const isLeapYear = function (year) {
    if (year % 4 ===0 && year%100 !==0){
        return true
  }
     else if (year % 4 ===0 && year % 400 ===0 && year % 100 ===0 ) { return true
      } else {
  return "fales"
  }
  }