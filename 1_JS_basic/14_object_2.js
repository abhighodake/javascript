// non-singleton object :- it is created using literals
console.log("\nNon-singleton object using literals");
const tinderUser1 = {}  // it is also empty non-singleton object 
console.log("Empty object ",tinderUser1);

//---------------------------------------------------------------------------------------------

// object using constructor
// when we create object using constructor then it is singleton object
console.log("\nSingleton object using constructors");
const tinderUser = new Object()  // here we create new empty object
console.log("Empty object ",tinderUser); // it is singleton object


// define some values or elements in empty object created using constructor:-
tinderUser.id = "123abc"
tinderUser.name = "abhi"
tinderUser.isLoggedIn = false

console.log("\Adding some values/elements in singleton empty object");
console.log(tinderUser);


//------------------------------------------------------------------------------------------------

// Object inside object:-
console.log("\nObject inside object\n");
const regularUser = {
    email:"abhi@gmail.com",
    fullname: {              // note:- object inside object
        userfullname:{       // note:- nesting of object is also possible we can write more than one object inside a single object
            firstname:"Abhi",
            lastname:"Ghodake"
        }
    }
}
console.log(regularUser);
// how to access inner object value:- solution using dot
console.log("\nAccess inside object's value by using dot:-");
console.log(regularUser.fullname.userfullname.firstname);


//----------------------------------------------------------------------------------------------------------------

// concate/merge two object like array:-
console.log("\nMerge two object:-");
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

console.log("\nObj1 and Obj2");
console.log(obj1);
console.log(obj2);

console.log("\nMerging object without ... i.e. three dots");
const obj3 = {obj1,obj2} // it will not properly merge two object in this obj1 is separate and obj2 is separate
console.log(obj3); // o/p:- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// solution:- use three dots before obj like array
console.log("\nMerging object with ... i.e. three dots(spread operator)");  // ... => spread operator
const obj4 = {...obj1, ...obj2} // by this method you can properly merge two or more obj in single obj
console.log(obj4);  // now obj4 contains all elements of obj1 and obj2 as a single obj
// o/p:- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// or:- we canuse assign method to merge objects
const obj5 = Object.assign({}, obj1, obj2) // if we does't give empty object like {} then it will stored result in first parameter if it is obj1 then it will change and save result in obj1 and also stored new result in assign obj
console.log("\nMerge object using assign method",obj5);

// in this first parameter is target if it is empty object{} then all values stored in new empty obj and result is assign to obj
// if we don't give target i.e. {} empty obj then it will consider first source obj as source as well as target and it modify first obj
// e.g.
console.log("\nif we don't give target");
const obj6 = Object.assign(obj1, obj2) // here obj1 act as target as well as source
console.log("value of obj6",obj6);
console.log("value of obj1",obj1);
console.log(obj1 === obj6); // it is true due to we don't assign target in above operation '


// note:- in most cases we are using spread operator ... to merge two object/array

//------------------------------------------------------------------------------------------------------------

// when we receive value from database it will give array of object
console.log("\nArray of a object");
const user = [
    {
        id:1,
        name:"a"
    },
    {
        id:2,
        name:"b"
    },
    {
        id:3,
        name:"c"
    }
    // and so on
]

console.log(user);
// if we want to assign value of object in array then
console.log("Assign specific object value  :-",user[0].name  );
// simply use index to assign object first and then use dot to assign it's value


//---------------------------Very Important ------------------------------------------------------------

// how to access keys or values of object

// key:-
console.log("\nAccessing only keys of object it will return array of keys");
console.log(tinderUser);
console.log(Object.keys(tinderUser));


// values:-
console.log("\nAccessing only values of object it will return array of values");
console.log(tinderUser);
console.log(Object.values(tinderUser));




//--------------------------------------------------------------------------------------------------------------------
// to find out if object contains specific property i.e. key or not
console.log("\nFind out object contains specific property or not");
console.log("key=> isLoggedIn ",tinderUser.hasOwnProperty('isLoggedIn'));
console.log("key => loggedIn ",tinderUser.hasOwnProperty('loggedIn'));
