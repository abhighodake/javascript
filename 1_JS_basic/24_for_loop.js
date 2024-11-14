// iterations === loops
// for loop, break & continue

//-------------------------------------------------------------------------

// print first 10 natural number

for(let i=1;i<=10;i++)
    console.log(i+1);

//-------------------------------------------------------------------------

// loop inside loop

console.log("\nloop inside loop :-");
for(let i=0;i<2;i++)
{
    console.log(`Outer loop i=${i}`);
    for(let j=0;j<2;j++)
    {
        console.log(`Outer loop i=${i} and inner loop j=${j}`)
    } 
}
    

//---------------------------------------------------------------------------

// Access elements of the array:-
console.log("\nAccessing elements of the array using for loop");

const myArray = ["Shiv", "Hanuman", "Krishna"]
// note always run loop from 0 to n-1  i.e. n is the length of the array
for(let i=0; i<myArray.length; i++)
{
    console.log(myArray[i]);
}

//------------------------------------------------------------------------------------------------

// break keyword to stop the executuion of the loop

console.log("\nbreak keyword");
for(let i=1;i<=100;i++)
{
    if(i==5)   // it will terminate the loop if i is 5
        break
    console.log(i);
}


//--------------------------------------------------------------------------------------------------

// continue keyword is used to skip some execution

console.log("\Continue keywords");

for(let i=1;i<=20;i++)
{
    if(i%2 != 0)  // it will skip all odd number due to continue
        continue
    console.log(i);
}