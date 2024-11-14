// Array :-
const marval_hero = ['spiderman', 'ironman', 'thor']
const dc_heros = ['aquaman',' batman', 'superman']

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// push array in the array
// Note:- when we push array in array then while array is consider as one element
marval_hero.push(dc_heros)
console.log(marval_hero); // dc_heros array element will be push as single array element means in marval_heros it will stored at index 3 only all element is stored in single index
console.log(marval_hero[3]);

marval_hero.pop()
console.log(marval_hero);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// concat or merge array
// note:- concate :- this actually merge element of two array in single array and all the elemnts are seperate at specified index 
// but we can only concate two arrays at a time 
let concate_hero = marval_hero.concat(dc_heros)
console.log(concate_hero);

// sol:- if we want to concate more than two array then
const indian_heros = ['hanumna', 'shaktiman', 'bahubali'] // if you want to merge two or more array then use this method only or you can use above concate method to merge only two array
let all_heros = [...marval_hero, ...dc_heros, ...indian_heros]
console.log(all_heros);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// .flat:- it will give you single array if array consist subarrays
const sub_arr = [1, 2, [3, 4, [5, 6]],7]
const one_arr_of_sub = sub_arr.flat(Infinity) // instead of infinity gice exact number of subarray
// it will merge all subarray and give single array
console.log(sub_arr);
console.log(one_arr_of_sub);


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// we can check also give data is in array or not
let str = 'Abhi'
console.log(Array.isArray(str)); // it will give false as it is string

// now we can convert it to array
let convert_arr = Array.from(str)  // it will convert string into array
// and string character is stored at separate index like 0:'A' 1:'B' 2:'H' 3:'I'
console.log(convert_arr);
console.log(Array.isArray(convert_arr));


//---------- IMPORTANT ---------------------
// very Imp:- if we are trying to convert object into array then we have to specify we need which array like keys or values
// if we don't specify it then it will give empty array
console.log(Array.from( {name:"Abhi", age:18 })); // it will give empty array due to object

//--------------------------------------------------------------------------------------------------------------------------------------
// Array.of :- we can also use this method to convert into array
console.log(Array.of(str));  // it will stored abhi as single element instead of separate character
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.from(score1)); // it gives empty array
console.log(Array.of(score1)); // it will give array
console.log(Array.of(score1,score2,score3));