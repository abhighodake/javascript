let name = "abhi"
let age = 18
console.log(name+" "+age)
// or 
console.log(`${name} ${age}`); // use this method while adding two string it is helpful in backend
// note:- if you want to concatenate two string and print it then use new method 
// it is useful in backend and known as string intrpolation
console.log(`My name is ${name.toUpperCase()} and my age is ${age}`);  // by this we can also use function of the string as toUpperCase()



// new way to declare string 
let gameName = new String('abhi')  // here string is object i.e. key value pair
console.log(gameName);
// note:- declaring in new way provides more function for string 
console.log(gameName.toUpperCase());
// in this it is a object which means abhi is the value and it's pair is indexes
// e.g. 0:'a'  1:'b' and so on
// and it provide more methods
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);

console.log("Index and positioning of the character");
// note:- if we find out which at given index which character is there
console.log(gameName.charAt(2));
// note:- if we find out the index of the charater
console.log(gameName.indexOf('a'));



// some imp function

// uppercase
// lowercase
// substring
// slice
// trim
// replace
// includes :- to serach word or charcter in string i.e. serach
// search
// split:- string convert into array  