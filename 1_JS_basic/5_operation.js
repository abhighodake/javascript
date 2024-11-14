// some common arithmetic operation
let a = 5
let b = 6

let c = -a // negative of a will be stored
console.log(a+b); // addition
console.log(a-b); // subtraction 
console.log(a*b); // multiplication
console.log(a/b); // divide
console.log(a%b); // for reminder
console.log(a**b); // for a to the power b

// addition of string 
let str1 = "hello"
let str2 = " abhi"
let str3 = str1 + str2 // note we only do addition of string
console.log(str3);
console.log("3" + "3");//33

// addition of string and number

console.log(3 + "3"); // 33
console.log("3" + 3); // 33

console.log("3" + 1 + 2); //312
console.log(1 + 2 + "3"); // 1+2 = 3 + "3" =33
console.log(1 + "2" + 3); // 123

// addition of boolean opertaor
console.log(+true); // 1 
console.log(-false); // -0 
// note :- we only write operator(true/false)  
// we can not write (true/false)operator e.g. true+ it will give error

// Note :- For more than one arithmetic expression use proper brackets 

// precendence operator ++ or --
let gameCounter = 100
gameCounter++; //postfix increent
console.log(gameCounter);
// note two types of increment and decrement 
// 1) prefix and 2) postfix
