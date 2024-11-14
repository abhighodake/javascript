//  tThere are two methods to declare object :-
// 1) literals or 2)constructor
// singleton:- when we declare/create object using constructor
//--------------------------------------------------------------------------


// how to declare object using literals:-
const JsUser0 = {}

// how to declare object using constructor
Object.create // it create singleton  object

//------------------------------------------------------------------------------

// in this we will talk about object that is declared using literals

// following is the way you can declare object using key:value pair
const JsUser = {
    name: "abhi",
    "full name":"Abhijit Ghodake",
    age: 21,
    location: "Ahmednagar",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday","Saturday"]
}
// key:value pair
// system bydefault take name key as a string i.e. "name":"abhi"

// now how to access object values
console.log(JsUser.name); // don't use this method
console.log(JsUser["name"]); // system consider key in double quotes

//console.log(JsUser.full name); // we can not access elements which has space in their key
// so use square braces to access value
console.log(JsUser["full name"]);


//---------------------------------------------------------------------------------------------------
// how to use Symbol datatype in object
// note:- you can access symbol using only square bracket .mySym is not used in access symbol in object
console.log("\n Add symbol in object");
let mySym = Symbol('key1')
const myObj = {
    name:"abhi",
    age:20, // very imp
    [mySym]:"myKey1", // note:- if you don't use brackets[mySym] then it will consider as String 
    email:"abhi@gmail.com"
}
console.log(myObj[mySym]);  // you can access symbol by this way only

// note:- you can change the value of any key
console.log("\n Change value of key");
myObj.email = "abhijit@gmail.in"
console.log(myObj.email);
console.log(myObj);

//note:- you can freeze object so no one can make changes in object
console.log("\n freeze object so no one can change value of the key");
Object.freeze(myObj);
//now if you change valaue of key it will not affect 
myObj.email="ghodake@gmail.com"
console.log(myObj.email);
console.log(myObj);




//-----------------------------------------------------------------------------------------------------------
// how to add function in object:-
// note:-make sure your object is not freeze while doing any changes outside the object
console.log("\n adding function in object");
JsUser.greeting = function()
{
    console.log("Hello, first function inside object");
}
console.log(JsUser.greeting());
JsUser.greetingTwo = function()
{
    console.log(`My name is ${this["full name"]}`); // you can access elements/members of the current object using this keyword
}
console.log(JsUser.greetingTwo());


// Note:- imp for interview some special cases like Symbol and multiple string for key
/*
    in most cases you access the value of object using dot
    but while access value of Symbol then you have to use brackets[]
    also when key consist multiple string like "full name" then also ypu have to use brackets like object["full name"]
    */