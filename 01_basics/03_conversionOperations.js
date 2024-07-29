let score= "33abc";

let ValInNum= Number(score);

console.log(typeof ValInNum) //number

console.log(ValInNum)  //NaN - Not a number

// Number(null) => 0
// Number(undefined) => NaN
// Number("Addy") => NaN

//  Boolean(1) => true ,  "Dhruv" => true
//  Boolean(0) => false ,  "" => false