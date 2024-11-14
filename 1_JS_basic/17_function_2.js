// rest operator:- ...
console.log("\n...rest operator");

console.log("only rest argument :-");
function calculateCartPrice(...num1)   // this function take only one argument but here we used rest operator so it take array as argument
{
    return num1
}
console.log(calculateCartPrice(100,200,300,400));  // function contains only one argument i.e. rest so all argument is take/retunr as array


console.log("rest argument with two parameters:-");
function calculateCartPrice1(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice1(100,200,300,400));  // function contains two parameters and one rest argument so it will give two arguments to two parameter and return the array of remaining arguments 

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// how to pass object to the function

console.log("\nhow to pass object to the function");
const user = {
    name:"abhi",
    price: 199
}
console.log(user,"\n");

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user)

// note:- while accessing object element in the function if you don't write the proper properties/keys then it will take it as undefined

// we can pass direct object to the funtion
console.log("\ncreating object at the time of passing to the function");
handleObject({
    name:"shiv",
    price:999
})



//--------------------------------------------------------------------------------------------------------------------------------------------------------

// how to pass array to the function

console.log("\nhow to pass array to the function");

const myNewArray = [200, 400, 100, 600]
console.log(myNewArray);

function returnSecondValue(getArray){
    return getArray[1]
}

console.log("second value of array that function return is : ",returnSecondValue(myNewArray));