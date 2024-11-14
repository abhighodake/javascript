// Array :- it is object in javascript they are not primitive due to following reasons
// JS arrays are resizable and can contain mix datatype
// means we can stored number,boolean,string in th same array

let arr = [0,1,2,3,4,5]
console.log(arr);
// note:- you can access elements of the array using index start from 0
console.log(arr[3]); // it will print the element which is present at index 3

// or you can create array using keyword
let arr1 = new Array(0,1,2,3,4)
console.log(arr1);
// very imp (shallow copy:-means same reference point)
// note :- when we copy array JavaScript copy operation creates shallow copy not deep copy remember

// push:- add number to last index,
// pop:- remove no from last index,
// unshift:-add no to oth index, 
// shift:-remove no from 0th index
// includes:- serach an elemnet present in  array or not give true or false
// indexOf():- it gives index of the element if it is present else it gives -1 as index if element is nolt present in the array
// .join() :- it binds array and convert into string

//imp:- for interview
// note:- also print original array to know the differncfe
// slice or splice  :- slice(2,3) or splice(2,3)
// slice does not manipulate original array it just print subarray excluding last index
// splice manipulate original array and remove the subarray which we given range and it includes last index as well