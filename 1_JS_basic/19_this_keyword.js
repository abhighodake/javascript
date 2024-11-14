// this :- this is a keyword which is used to access the elements or values of the current object

const user = {
    username: "Abhi",
    price:999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);  // here this keyword is used to access the useranme of user object because user is the current object

        console.log("it will print current object :- ",this,"\n");  // it will print the current object
    }
}

user.welcomeMessage()  // here we called the function inside the object using object name and dot 

// Note:- if we change the username in the object and called the function then the username is new due to now we have change the username
user.username = "Hitesh"
user.welcomeMessage()   // now for object username is new username


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//very imp for interview

console.log("\nIf we print only this:- ",this);  // it will print empty object due to now this keyword is not indicating any object

// Note:- if we print onlhy this in browser then it will give Window object not empty
// in browser there is Window as a global object so in global scope this keyword indicates the window as global object 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// if we print this keyword in function then it will not give empty object 
function chai(){
    console.log(this);
}
console.log("\nAfter calling function and printing this keyword in function note that functon not having object:-\n");
chai()

// note:- we only access object element using this keyword
function chai1(){
    let name="Abhi"
    console.log("\nNote if we are going to print value of other datatype rather than object using this :- ",this.name);
}
chai1()