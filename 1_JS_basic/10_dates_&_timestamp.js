// date is object in javascript
// date is calculated in milliseconds
// so it is easy to compare dates due to it calculated in millisecond 

let myDate = new Date() // it is instance of Date and stored in variable myDate
console.log(myDate); // note:- it is not readable

//--------------------------------------------------------------------------------------------
//Note:- date conversion to read date in proper manner
// to read date convert it to string
console.log(myDate.toString()); // it give day month date year and time also

// or you can also convert it to dateString  note:- it does not give time
console.log(myDate.toDateString());  // it gives day month date and year


// convert date object to locale string
console.log(myDate.toLocaleString()); // it gives 16/7/2024, 1:00:40 pm

// convert to localeDateString()   // it does not give time
console.log(myDate.toLocaleDateString()); // it gives only date 16/7/2024

// convert to JSON()
console.log(myDate.toJSON());

// convert to ISOString()
console.log(myDate.toISOString());
// note:- o/p of JSON and ISOString are same but only date is readable and it gives more info which we don't understand

// note:- type of date is object
console.log(typeof myDate);

//---------------------------------------------------------------------------------------------------------------------------
// note:- custom date
// if you want to create custom date then you can create by passing parameters
let myCreatedDate = new Date(2023, 4, 23)  // here 4 is month and in JS it start from 0 i.e 0=Jan 1=feb and so on and it give day automatically
console.log(myCreatedDate.toDateString());
// note:- you can also give time like hr,min, sec etc
let myCustomDate = new Date(2023, 1, 23, 5, 30, 15)
console.log(myCustomDate.toLocaleString());
// you also give date in format of "yyyy-mm-dd"  simillarly you can write in "mm-dd-yyyy" but not "dd-mm-yyyy"
let myCustomDate1 = new Date("2023-01-13") // here jan start from 01
console.log(myCustomDate1.toDateString());


//--------------------------------------------------------------------------------------------------------------------------------------
// TimeStamp
// it is necessary to compare two dates and we compare dates using milliseconds
// to convert date into milliseconds use getTime()
let myTimeStamp = Date.now() // it gives present moment timestamp from the date 1st jan 1970
console.log(myTimeStamp); 
// note:- if you want timestamp of custom date then 
console.log(myCustomDate.getTime());
// note:- comparision of two dates are important to provide subscription or hotel booking and many more

// if you want timestamp in seconds
console.log(Math.floor(myCustomDate1.getTime()/1000));


//-----------------------------------------------------------------------------------------------------------------------------------
// note:- we can extract only month or year or day or seconds using .get
console.log(myCustomDate.getDay()); // 0=mon 1=tue and so on
console.log(myCustomDate.getDate());
console.log(myCustomDate.getMonth() +1); // due to 0=jan 1=feb and so on and it is to avoid confusion so +1
console.log(myCustomDate.getFullYear());

//----------------------------------------------------------------------------------------------------------------------
// Note:- it just a proposal it does not available now so it not work 
// To get exact time of system
// Temporal.Now.instant()
// console.log(Temporal.Now.instant());