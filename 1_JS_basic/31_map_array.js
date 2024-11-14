const myArray = [1,2,3,4,5,6,7,8,9,10]

const newNums = myArray.map( (item)=> {
    return item+10 // it returns the value
})

console.log(newNums);

// it work as for each loop but it return the value

//--------------------------------------------------------------------------------------------------------------

// chaining:- means we can apply more than two method at a time
// e.g:- myArray.map().filter().map()

// Note:- In chaining the result of first method is passed to the second and result of second is passed to the third and so on and after fininshing all the methods final result stored in variable

const newNumsChain = myArray
                        .map( (item)=> {return item*10})  // explicit retun
                        .map( (item)=> item+1)  // implicit return  // Note:- in second method we used parameter name as same as in first method i.e item note that there scope is different
                        .filter( (item)=> item>40)  // implicit return

console.log("\nchaining method");
console.log(newNumsChain);

// difference between map and filter is
// map:- it returns each iterartion i.e. everry item of the array
// filter:- it checks the condition if condition is true then it will return the value