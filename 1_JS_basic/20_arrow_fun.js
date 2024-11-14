// another way to declare function
const chai = function()
{
    console.log("Another way to define the function")
}

chai()

//-----------------------------------------------------------------------------

// Arrow function :- Another way to define function

console.log("\nNote:- if we print only this keyword in arrow function then it will give emoty object\n");
const chai1 =  ()=> 
{
    console.log("This is an Arrow function");
    console.log(this);  // Note:- if we print only this keyword in arrow function then it will give emoty object
}
chai1()


//----------------------------------------------------------------------------------------

// Differnce between arrow function and regular function:-

/*
    Regular function:- when we print this keyword in regular function without having any object in function then it will not give us empty object it will gives us information in object related to the function
    
    Arrow function:- when we print this keyword in arrow function without any object then it will print the empty object as we print this keyword globally without any object in node engine

    Very IMP:-
    NOTE:- We can use this keyword in arrow function 
*/

//---------------------------------------------------------------------------------------------------


// Arrow function for addition of two numbers
// following arrow function is explicit return function
// Explicit return function:- function having return keyword
console.log("\nArrow function for addition of two numbers :-");

const addTwo = (num1=12, num2=10)=>
{
    return num1 + num2
}
console.log("Default parameters :- ",addTwo());

console.log("Passing arguments 4 & 5 :- ",addTwo(4,5));



//------------------------------------------------------------------------------------------------------------------

// Implicit return

// Subtraction of two number
// Arrow function with implicit return 
// Note:- very important for react

const chai2 = (num1=25,num2=20) => (num1 - num2)   // if we return any thing in parentesis() no need to write return keyword
// here 25 & 20 are default parameters
// Note:- if we write function body in {} curly brackets then we have to write the return keywords
console.log("\nArrow function with implicit return type :- ",chai2(12,10))


//-----------------------------------------------------------------------------------------------------------------------------


// If we have to return object in implicit way in arrow function then wrap the object in parenthesis like ({})

const chai3 = () => ({username:"Abhi"})  // wrap object in parenthesis to return in implicit way
console.log("\nObject return in implicit way in arrow fun :- ",chai3());