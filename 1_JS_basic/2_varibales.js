const accountId = 5
let accountName = "Abhi"
var accountEmail = "abhi@email.com"
accountCity = "Ahmednagar" // it's not a good practice

// there are two types of variables constant and variables
// constant are declared using const
// but variables are declare usinh var , let and only variable name


// note :- variable declaration using var is not best in scope and bracket specificity
//if we declare global variable using var and change in any loop it will change so avoid creating variables using var

// in new version we create variables using only let and it is best practice

console.table([accountId,accountName,accountEmail,accountCity])  // to print multiple output