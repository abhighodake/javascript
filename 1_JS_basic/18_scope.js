// local(block) scope vs global scope :- 

// note:- when we declare cariable using var then it is global variab
// but when we declare variable using let and const then it is local variable

if(true)
{
    let a = 10  // local var
    var b = 20  // global var
    const c = 30 // local var
    d=40    // global variable
    console.log(a);
    console.log(c);
}
console.log(b);
console.log(d);

// var & just variable name:- global variable
// let & const :- local variable

// Note :- while running JS program in node i.e. in VSCode and in inspect mode i.e. in browser then concept of scope will be different


//------------------------------------------------------------------------------------------------------------------------------------------------

// varibale with same name in global scope and local scope

console.log("\nvaribale with same name in global scope and local scope");

var same = 40

if(true){
    let same = 21
    console.log("Local var : ",same);
}
console.log("Global Scope : ",same);

