/*  DOM Selectors 
    1) getElementById
    2) getElementByClassName
    3) querySelector('h1')  // it will give you very first h1 in that document
            note:- in querySelector you can access eleemnt by id by using #id by class .class
            i) by id:- querySelector('#title')
            ii) by class:- querySelector('.heading')
    4)querySelectorAll('h1') // it will give you all h1 in that document
        // note in querySelector() we can access element as we used in CSS selector
*/

// NodeList and HTMLCollection return by DOM selectors are not array they look like array also they have some features of array but remember they are not array


// Note:- NodeList is not an array
// Note:- if we recive NodeList we can not directly change style of element we have to access that element using index number like array even if we recieve only one element then also we have to access thast element by using index 0
// Note:- we can use foreach loop in NodeList


// Very Important
// querySelector gives NodeList
// getElementByClassName gives HTMLcollection 
// note:- HTMLcollection does not have any loop like NodeList


// Note:- when we get NodeList or HTMLCollection then we will convert it into basic array so that we can use all functinality of array like loop,filter,map,reduce and so on
// How to convert into array
// Array.from(variabel_name)  // Always write A in capital of Array

//---------------------------------------------------------------------------------------------------

title = document.getElementById('title'); //document.getElementById('title')

// with this we can change background color and we can also use other css property in style
title.style.backgroundColor = 'red'



// how can we access content of element
title.textContent  // // Note:- it will give you text that display property is none
// DOM Learning on Chai aur code test text

or

title.innerHTML  // Note:- it give all the content of the element if in that element other tag is used it will alos give that tag
// DOM Learning on Chai aur code <span style="display: none;">test text</span>

or

title.innerText   // Note:- it will not give you text that display property is none
// DOM Learning on Chai aur code



// Note:- if you want to access hidden text of any element then you can use title.textContent  otherwise you can use title.innerText

// Note:- innerHTML gives you html tags used inside that element


//---------------------------------------------------------------------------------------------------

// with this we can modify text which is displayed on webpage
// title.innerHTML = 'Abhi'


//----------------------------------------------------------------------------------------------------------------

// How to get attribute value of elements:- 

// document.getElementBYID('title').getAttribute('id)    with this we can get id attribute

//-----------------------------------------------------------------------------------------------------

// simillarly we can use setAttribute to set/add new attribute

// document.getElementById('title').setAttribute('class', 'test heading')     // 'attribute','value1 value2'
// Note:- if we set attribute and that attribute is already present then it will overright that attribute means old attribute value get deleted and new one is assign
// VERY IMP:- always write vslue of first attribute as value2 or value1 so that you can prevent it from overrigth