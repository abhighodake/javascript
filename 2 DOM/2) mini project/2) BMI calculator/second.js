const form = document.querySelector('form')


/*
    NOTE:- This will give you empty value

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    Note:- if you take value outside then after refreshing the page it will be zero or empty as before
*/


// note:- always take value inside form not outside
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const results = document.querySelector("#result")  // take div of result to display the result
    if(height=== '' || height < 0 || isNaN(height)){  // to check given height is a not a number NaN don't use height!=NaN instead use method isNaN()
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight==='' || weight < 0 || isNaN(weight)){
        results.innerHTML =  `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ( (height*height)/10000)).toFixed(2)
        if(bmi < 18.6)
        {
            results.innerHTML = `<span> BMI = ${bmi} <br>
                                Under Weight! </span>`
        }
        else if(bmi>=18.60 && bmi <=24.9)
        {
            results.innerHTML = `<span> BMI = ${bmi} <br>
                                Normal Weight! </span>`
        }   
        else
        {
            results.innerHTML = `<span> BMI = ${bmi} <br>
                                OverWeight! </span>`
        }
    }
}); 
