// comparision operator 
console.log("Simple Comarision number to number");
console.log(2 > 1);  // greater
console.log(2 >= 1); // greter or equal to
console.log(2 < 1);  // less
console.log(2 <= 1); // less or equal to
console.log(2 == 1); // equal to
console.log(2 != 1); // not equal to

// note o/p :- true or false

// note:- when we compare same datatypes then there will be no problem 

// very imp
/*
    but when we compare different data types then it will creste problem
*/
console.log("Comparision of string and number");
console.log("2" > 1); // here first 2 is string which is convert in number and then number and number will be compare
// but avoid comparision of different datatypes due to sometime it will give unpreditable result

// comparision of NULL with 0
console.log("comparision of NULL with 0");
console.log(null > 0);  // false
console.log(null < 0);  // false
console.log(null == 0); // false 
console.log(null >= 0); // true  // in abouve null>0 is false so don't compare diffeerent datatypes

// === it does not convert data type while comparision as == this convert
console.log("===");
console.log("2" === 2); // false it will not convert "2" to 2 and give false

// very imp :- don't compare differnt data types to avoid confusion