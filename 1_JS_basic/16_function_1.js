function sayMyName(){          // sayMyName is the name of function
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}

// function reference :- sayMyName      // without parenthesis ()
sayMyName 


// function call :- sayMyName()         // with parenthesis () 
sayMyName()

//------------------------------------------------------------------------

// Addition of two numbers using function:-

console.log("\nAddition of two number i.e. parameter function but does not return anything");
function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}

addTwoNumbers(4,5)     // o/p:- 9
addTwoNumbers(4,"5")   // o/p:- 45

// Note:- above function does not return any thing if we are going to stored the result of above function then it will stored undefined
const result = addTwoNumbers(5,6)
console.log("Result of function that's return nothing : ",result);

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Subtraction of two number that return result
console.log("\nSubtraction of two number that return result");
function subTwonumbers(number1,number2){
    return number1-number2;
}
const result1 = subTwonumbers(5,3)
console.log("Result of function that's return something",result1);



//--------------------------------------------------------------------------------------------------------------------------------------------------

//function that resturn after succesfull login example
console.log("\nfunction that resturn after succesfull login example");
function loginUsermessage(username)
{
    return `${username} has successfully login`
}
console.log(loginUsermessage("Abhi")); 

// very imp:- interview
// note:- if we don't pass any arguments then it will take argument as undefined
console.log(loginUsermessage());
console.log("\n"); 



//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// function with default parameter
console.log("\nfunction with default parameter");
function isLoggedIn(username="abhi")
{
    return `${username} has successfully login`
}

// note:- if we don't pass any arguments then it will print default argument
console.log(isLoggedIn());