// for each loop it is higher order function

const myArray = ["c","cpp","pyhton","javascript","css"]

console.log("\nfor each loop for array:-");

myArray.forEach( function (item) {    // it is same as a function but callback function does not have any name and in parameter we pass only one value so that it act as index of the array 
    console.log(item);  // it will print the data of the array
    // in function body we can perform any operation as per requirements
})



// Note we can use arrow function in function callback in for each loop

console.log("\nArrow function in for each loop");
myArray.forEach( (item)=> {
    console.log(item);
})


// Very imp:- 
// Callback function :- callback function is a function which does not have any name  e.g. we used it in for each loop
// callback function can be written as regular function or with arrow function


// Note:- Insteading declaring function in for each loop we cann decalre function outside the for each loop and we can give it's refernce to the for each loop

console.log("\nDeclaring function outside the for each loop and give it's refernce to the loop");

function printMe(item)
{
    console.log(item);
}

myArray.forEach(printMe)   // here just give refernce as paramter in parameter don't call function just give refernce of the function

//--------------------------------------------------------------

// VERY IMPORTANT FOR INTERVIEW:-

// function of for each loop does not have only one pqarameter it has three parameter 
// first parameter :- to access the iteam of array
// second parameter :- to access the index of the array
// third parametr :- to access the hole array

console.log("\nOther parameter of the function inside in for each loop:-");
myArray.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})



//------------------------------------------------------------------------------------------------------------------------------------------------------
// VERY IMP
// Note :- it is very important operation
// it is required for understanding and perform operation on the values received from DB
// DB sends values in the form of array of object

// for each loop for array containig object

const myArrayObj = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "Java",
        langFile: "java"
    },
    {
        langName: "C++",
        langFile: "cpp"
    },
    {
        langName: "Python",
        langFile: "py"
    },
]

console.log("\nFor each loop for array of object");
myArrayObj.forEach( (item)=> {  // in this item parameter represent object at each iteration in first iteration it indication 0th index object and so on
    console.log(item.langName);  // we can specify here which value we want
})