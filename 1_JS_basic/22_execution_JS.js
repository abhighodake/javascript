/*
    Javascript Execution Context :- there are two Execution Context:-  1) Global Execution Context ,  2) Function / functional Execution Context  ,  3) Eval Execution Context

    1) Global Execution Context:- 
    when we are going to execute the js program it creates GLOBAL EC(execution context)
    NOTE:- global ec is different for browser, node and other engine
    for browser Global EC is window object
    and for node it is empty object
    Note:- this keyword is indication the Globally EC if we print this globally then it will give GLobal EC

    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    2) Function Execution Context:-


    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    3) EVAL Execution context :- it is the property og Global Execution Context 
    Note:- It is not neccessary to learn it 
    It comes under mongos 


*/

/*
    How JavaScript code execute:-
    Two Phase:
        1) Memory creation phase / memory phase / creation phase :- ()
            In this Phase, in memory place will be created for variable or data structure to stored it
        2) Execution Phase :-
            In this phase acutal implementation of the expression are done like arithmatics or printintg etc    

*/



/**
    Phases of JS program execution :-
    1) Global Execution Phase :-  first it is allocated to this keyword

    2) memory phase :- 
        For variables:- in this phase all variable names are taken and then it assign undefined to the variable
        For function:- it will take function name and assign the defination  of the function

    3) Execution phase :-  
        For variable :- in this phase it will assign actual value of the variable to it
        for function :- it will execute the function call
            In this it will create( new varibale environment + execution thread ) for each function call separately
            Note:- For each function call memory and execution this two phase will conduct every time
            Note:- After the end of function new enviroment is deleted automatically
 */

// Note:- revised callstck for function execution