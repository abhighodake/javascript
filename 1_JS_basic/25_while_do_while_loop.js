// While loop

// Sum of first ten natural numbers

let sum = 0

let i = 1
while(i<=10)
{
    sum=sum+i
    i++
}
console.log("Sum of 10 number using while loop is ",sum);


// Access elemet of array using while loop

console.log("\nAccess elemet of array using while loop");
const myArray = ["Shiv", "Hanuman", "Krishna"]

let index=0
while(index<myArray.length)
{
    console.log(myArray[index]);
    index++
}

//----------------------------------------------------------------------

// do-while loop for addition of first 10 even natural number
// do while loop executes it's first iteration without checking condition so if condition is false it will execute one iteration
let s = 0

let i1 = 1
do{
    s=s+(i1*2)
    i1++
}while(i1<=10);

console.log("\nSum of first 10 even numbers using do while loop ",s);