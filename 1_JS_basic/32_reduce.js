// reduce just retun one value
// it take two parameter
// first:- extra variable in this we have to give initial value then it maintain the value after performing the operation
// second:- item of the array

const myArray = [1,2,3,4,5,6,7,8,9,10]

const initial = 0

const result = myArray.reduce( (previousValue,item)=> {
    console.log(`${previousValue}  ${item}`);
    return previousValue + item 
}, initial)  // here after function we give value for accumulator i.e. previousValue by using comma we can provide diract value without using variable i.e. 2 or anything 

console.log(result);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// total price in cart