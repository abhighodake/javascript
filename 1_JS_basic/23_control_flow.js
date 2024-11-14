// if-esle  & switch-case :-

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// if-else:-


if(true)
{
    console.log("It is if block");
}
else
{
    console.log("it is else block");
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------

// note:- if there is only one line after if then we can write it without {} curly brackets and f we want to write multiple lines without {} then we use semicolun , to separate line but it is bad practice
if(2 == '2')
    console.log("If of two differnet data type compare with 2=='2' ");
else
    console.log("Else of two differnet data type compare with 2=='2' ");

//-------------------------------------------------------------------------------------------------------------------------------------------------

if(2 === '2')  // Note:- if you are going to compare two different data types then always use === sign 
{
    console.log("If of two differnet data type compare with 2==='2' ");
}
else
{
    console.log("Else of two differnet data type compare with 2==='2' ");
}

//-----------------------------------------------------------------------

// IMP FOR INTERVIEW
// flasy and truthy value

// There are some falsy values i.e. there result is false when we used in in condition
// false , 0 , -0 , BigInt=> 0n , "" ,  null , undefined , NaN

// There are some truthy value i.e. there result is true in if condition
// true, '0' , 'false', 1, {} , [] , " " , function(){}

// Note:-  " " this is not empty string it stored space charater
// Note:- simillarly if false,0 or any thing written in string then it will true because only empty string is false otherwise other if there is anything in string then it is true



/*  VERY IMP
    when you compare following things then reult it true

    false == 0
    false == ''
    0 == ''
*/


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// How to check array is empty or not
console.log("\nHow to check array is empty or not");
const arr = []
if(arr.length === 0)
{
    console.log("Empty Array");
}
else
{
    console.log("Array is not empty");
}

//-----------------------------------------------------------------------------------------------------------------------------


// How to check object is empty or not
console.log("\nHow to check object is empty or not");
const obj = {}
if(Object.keys(obj).length === 0)   // note:- Object.keys(obj) it will return the array so we can check the length of array to find out it is empty or not
    console.log("Empty object");
else
    console.log("Object is not empty");

//-------------------------------------------------------------------------------------------------------------------------------------

// logical operator :- && => and    || => or

const loggedInFromGoogle = true
const loggedInFromEmail = false

console.log("\nConditional operator and or");

if(loggedInFromEmail || loggedInFromGoogle)
    console.log("Successfully logged in");
else
    console.log("Not logged in");


//---------------------------------------------------------------------------------------------------------------------------

// switch-case
// note:- we can take string as a key not like c/cpp only take constant to mach the case

console.log("\nSwitch Case");
const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    default:        
        break;
}
// Very Imp :- for interview
// Note:-  if we don't use break then it will execute all case below the match case until default but it does not execute default

//-------------------------------------------------------------------------------------------------------------------------------------------


// Nullish Coalescing Operator (??)
// it is mostly used for null & undefined keyword

let val1;

val1 = 10 ?? 15
console.log("\nNullish Coalescing Operator (??) \n10 ?? 15 =>",val1);

val1 = null ?? 20
console.log("null ?? 20 =>", val1);

val1 = undefined ?? 25
console.log("undefined ?? 25 =>",val1);
 
//---------------------------------------------------------------------------------------------------------------------------------------------------

// Note:- nullish claiescing operator and terniary operator are two different things

// Terniary operator:- for if-else
// condition ? true : false

console.log("\nTerniary operator  condition ? true : false ");

(2<=3) ? console.log("Terniary operator true block") : console.log("Terniary operator false block");