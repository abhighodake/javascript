// Destructuring of object

const course = {
    coursename: "JsHindi",
    price: "999",
    courseInstructor: "Hitesh"
}


// if we want any value from object then we can destructure object like following way and also rename it
const {courseInstructor: instructor} = course
// {key: rename}
console.log(instructor);

// Note:- whenever you see the syntax of {} then remember it is destructuring of object
// e.g. {courseInstructor}   // destructuring
// you can also rename it like:-  {courseInstructor: instructor}   here instructor is rename so we can used it




//---------------------------------------------------------------------------------------------------------------------


// JSON :- JavaScript Object Notation
// JSON:- it is nothing but object withnout name i.e. whenever we recieve data from backend it gives in the form of object but it does not have any name 
// like:-
/*
    before it gives data in xhtml which is difficult to understand
    note:- After API call it gives data like this:-
    {
        "name" : "abhi",
        "coursename" : "js in hindi",
        "price" : "free"
    }

    note:- it's key also written in double qoutation mark

    very imp :- sometimes we get the array of object from backend or whenever we call API
*/
   