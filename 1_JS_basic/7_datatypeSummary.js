// Primitive :- in primitive data type argument passed to the function as value 
// which means actual value does not pass to the function copy of the value is pass
// 7 types :- String,Number,Null,Boolean,undefined,symbol,BigInt


// Non-primitive(Reference Type) :- in non-primitive data type argument pass to the function as reference not as value
// Types :- Array, Objects, Functions


// Very Imp:- JS is dyanamically type or statistically type language
// it is dynamically type language due to we don't mention the data type for variable

// note :- decimal 10.3 is also treat as a number datatype

// Array
let hero = ["Shiv","Hanuman","Krishn"];
console.log(hero);  

// object :- objects are nothing but we write value in key:value pair in curly bracket{}
let myObj ={
    name : "abhi",
    age: 21,
}
console.log(myObj);

// function defination and stored in variable
let myFun = function(){
    console.log("Hello");
}

console.log("value stored in varibale after function");
console.log(myFun);