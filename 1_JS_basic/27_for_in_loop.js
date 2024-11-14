// Note:- for of loop does not used to iterate object because it will give error like object is not iterable

// for in loop for object

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
console.log("\nfor in loop for object:-");
for (const key in myObj) {
    //console.log(key);  // it will give only key if you want values of the key then 
    console.log(`key is:- ${key} and value is:- ${myObj[key]}`);
}

// Note:- for in loop just gives keys of object with the help of key we can find the value of the object for particular key


//---------------------------------------------------------------------------------------------------------------------

// for in loop for array:-
// Note:- it will give all the index of array not the data/value stored at that index

const myArray = ["c","cpp","pyhton","javascript","css"]

console.log("\nFor in loop for array:-");
 
for (const num in myArray) {
    //console.log(num); // it will print the index of array to print value of array use arr[index]
    console.log(`at index ${num} value is ${myArray[num]}`);
}


//-------------------------------------------------------------------------------------------------------------------------------

// for in loop for map

const map = new Map()
map.set('In',"India")   // insertion of  key and value
map.set('USA',"United State of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);  // it does not print anything due to map is not iterable
}

// Note:- Map is not iterable so if we use for in loop for map it will not give error or not print anything
// Note:- but with the help of some modification we can make map iterable