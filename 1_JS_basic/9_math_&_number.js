// following way is also roght to define a number 
let score = 400
console.log(score);
// but you define number in following way it will provide more function to the number like string
let balance = new Number(300)
console.log(balance);

// note:- both way are perfect but use second way to get more feature and it is good practice also helpful in backend

// convert number into string
let str = balance.toString();
console.log("\nConvert number into string");
console.log(str);
console.log(typeof str);

// toFixed :- to provide appropriate value upto decimal number 
console.log("\ntoFixed(2) 2 means upto 2 decimal number");
console.log(balance.toFixed(2)); // here it will give upto 2 decimal number

// precision:- used it very carefully if you give value 3 and number is 4 digit then it will give number upto 3 digit and remaining will give as exponential 
// note:- use it very carefully (you can give value from 1 to 21)
console.log("\ntoPrecision(3) 3 denotes that how many digit it will print");  // it will return string
let n1 = 542.457
console.log(n1);
console.log(n1.toPrecision(3));
console.log("If we use precion value less than the digit in number then it will print following wrong output:-");
console.log(n1.toPrecision(2)); 


// tolocaleString('en-In')  :- it gives number with cooma like after 1,000 or 10,000 or 1,00,000 like that
// by defaukt it will provide coomas according to american standard but we can specify in which standard we will like to have as per above
let n2 = 10598354
console.log("\n toLocaleString()");
console.log("We can use indian standard as following");
console.log(n2.toLocaleString('en-In'));

// Very Imp ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// we can use Math it provide various property like absolute, square, squareroot, pi, log, sin, cos and many more
//note:- Math is object in datatype
console.log("\nMath object and it's property/function");
console.log("Absolute Math.abs()");
let n3 = -522
console.log(Math.abs(n3));
// round function of Math :- it will round the number like 4.3=4 or 4.6=5
console.log("--------------------------");
console.log("to round the given number");
let n4=4.6;
console.log(n4);
console.log("After rounf up value:-");
console.log(Math.round(n4));
// note:- ceil and floor are similar to round 
// ceil:- 4.2=5 it take higer value if it contain any decimal value
// floor:- 4.9=4 it take value as it is it dies not increment value it just ignore the decimal number
console.log("---------------------------");
// square root
console.log("Sqwuare root");
console.log(Math.sqrt(225));
console.log("------------------------")
// minimum and maximum value
console.log("Minimum Value:-(4,3,2,1)");
console.log(Math.min(4,3,2,1));
console.log("Maximum value:-");
console.log(Math.max(4,3,2,1));

// Random:- to choose random value
console.log("----------------------------------------");
console.log("to select random value :- ");
console.log(Math.random()); 
// note:- it will choose random value between 0 to 1
// it will helpful in dice or other game

// to chose value more than 1:-
console.log(Math.floor( (Math.random()*10)+1 ) );  // to take integer value i.e. round up value

// if we given MIN and MAX value and we have to select between them then
// example:-
let min=10
let max=20

console.log( Math.floor(Math.random() * (max -min + 1 )) +min); // note:- Imp Equation understand it
