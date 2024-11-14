// for of loop

// for of loop for array:- 

console.log("\nFor of loop");
const arr = [1, 2, 3, 4, 5]

for (const i of arr) 
{
    console.log(i); // it will print the all values of the array
}

//--------------------------------------------------------------------------------------------------------

// Array of object :-

console.log("\nFor of loop for object");
const myArray = [{name:"Abhi", age:20} , {name:"Abhi1", age:21}, {name:"Abhi2", age:22}]

for (const i of myArray) 
{
    console.log(i.name + ' ' + i.age);   
}

//-----------------------------------------------------------------------------------------------------------

// for of loop for String:-

console.log("\nFor of loop for string:-");
const greetings = "Hello World!"

for (const grret of greetings) 
{
    console.log(grret);    
}

// Note:- we can use for of loop for array, object or string that means where iteration is possible


//------------------------------------------------------------------------------------------------------------------------

//Very IMPORTANT :- object is not itetrable using for of loop
// for of loop for object:-

// const myObj = {
//     'game1' : 'nfs',
//     'game2' : 'spiderman',
//     'game3' : "GTA"
// }

// for (const key of myObj) {     // it will give error that object is not iterable
//     console.log(key);
// }


//-----------------------------------------------------------------------------------------------------------------------------------------

// Map :- it is object and stored values/elements in key-value pair
// Note:- it remember the insertion order of the data

const map = new Map()
map.set('In',"India")   // insertion of  key and value
map.set('USA',"United State of America")
map.set('Fr',"France")

console.log("\nMap:-",map);

// if we are trying to insert value again it will not insert in it 
// Note:- Map contains unique value means one value can appear for one time only

map.set('In',"India") // Very Imp:- This value will not be insert in the map due to it already present

console.log("\nIf we are trying to insert duplicate value in map it will not allowed");
console.log(map);



// for of loop for map:-
console.log("\nfor of loop for map");
for (const key of map) 
{
    console.log(key); // it will print array of key and value  
}

// Note if you want to print separate key and value of the object then destructure array using bracket [key, val]
console.log("\nPrint Separate key and value of map by destructuring array");
for (const [key, val] of map) {
    console.log(key, ':-' , val);   
}