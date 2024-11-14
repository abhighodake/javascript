// IIFE :- (Immediately Invoked Function Expression)


// NOTE:- we invoke some function immediately such as database connection so that some things not pollutaed globally

// Normal Function invokation:-
function chai(){
    console.log("\Normal Function invokation");
}
chai();
// Note :- Remeber to give semicolumn after calling function so that to end the function and to execute another function otherwise it will give error if we call more than one function in row

//----------------------------------------------------------------------------------------------------------------

// IIFE:- to invoke function immediately write function in parenthisis() and after the end of function thet is after the ) write function call by using empty parenthisis immediately ()
// ()() :- first() for writting function and second () for calling function

( function chai1(){   // name IIFE function
    console.log("\nIIFE function invokation for DB connection or many more");
})();


//----------------------------------------------------------------------------------------------------------------------------

// IIFE by using arrow function

(  () => {   // unname IIFE function
    console.log("\nIIFE arrow function");
})(); // NOTE:- must write semicoln after calling the function otherwise other it will give error while caalling the another function

//------------------------------------------------------------------------------------------------------------------------

// give parameters to the function

( chai3 = (name)=>{   // named IIFE unction
    console.log("\nParameter is :- ",name);
})("Abhi");

