let score = "33abc"  // it is alphanumeric when we convert to number type it will convert but value storerd is NaN
let score1 = "23" // when string contains only number then it will properly convert and stored number
console.log(score);
console.log(score1);
console.log(typeof score); //or 
console.log(typeof(score1));

// the above score is in the form of string and we want to convert it in number to perform mathematical operation

let valueInNumber = Number(score)  // now score is convert in number and NaN value is due to alphanumeric string stored in new variables
console.log(valueInNumber);
console.log(typeof valueInNumber);  

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


// Very Imp:-
// when o/p is NaN it stand for not a number
// note:- when string is alphanumeric then data conversion convert string to number but value stored in new variable is NaN
// note:- when string contain only alphabets then string is converted into number but value stored is NaN

// very Imp:- When variable is NULL
let a=null
console.log(a);
console.log(typeof a);

let a1=Number(a)  // it will store 0 for null 
console.log(a1);
console.log(typeof a1);


// very imp :- When variable is undefined
let b=undefined
console.log(b);
console.log(typeof b);

let b1=Number(b)  // it will convert to number but stored NaN
console.log(b1);
console.log(typeof b1);

// very imp :- when variable is boolean
// then for true = 1
// then for false = 0

// summary:- NaN (Not a Number) But type is convert in Number 
/* String
    "33" => 33
    "33abc" => NaN
    "abhi" => NaN
 */

// null => 0

// undefined => NaN

// For boolean  // simmillarly we convert number to boolean  Boolean(isLogIn)
/*
    true => 1 
    false => 0
 */

// Note :- string to boolean
let s="Abhi" // then to boolean 1
let s1="" // empty string is 0 in bool
console.log(s);
console.log(s1);

let sb1 = Boolean(s) // 1
let sb2 = Boolean(s1) // 0
console.log(sb1);
console.log(sb2);

// Note:- simmillarly we can convert number to string

let no = 33
console.log(no);
console.log(typeof no);
let sno = String(no)  // stored 33 as string
console.log(sno);
console.log(typeof sno);