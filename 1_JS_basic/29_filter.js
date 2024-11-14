// Note:- for each loop does not wriiten anything

const myArray = [1,2,3,4,5,6,7,8,9,10]

const values = myArray.forEach( (item)=> {
    return item   // note:- it does not return anything
})

console.log("\nFor each does not return anythinf");
console.log(values);

//----------------------------------------------------------------------------------------

// Filter:- it will filter the values 
// Note:- filter return the value it is not like for each loop it return value and we can stored it in variable

console.log("\nFilter return the value and stored in new array/variable:-");

const values1 = myArray.filter( (item) => {
    return item > 4   // explict return
    // if we don't write return keyword in {} brackets it will return empty array []
})
console.log(values1);

//--------------------------------------------------------------------------------------------

// Note:- if we want to stored array value in other variable using for each loop then just push the values in new array where we want to stored the values
// Note:- For each loop does not return anything

let myNewArr = []

myArray.forEach( (item)=> {
    if(item>4)
    {
        myNewArr.push(item) // now it will stored value in new array
    }
    // Note:- it does not return like filter so we need to push values in new array to stored it
})
console.log("\nStored values of one array to another by using for each loop by just push the item to new array");
console.log(myNewArr);