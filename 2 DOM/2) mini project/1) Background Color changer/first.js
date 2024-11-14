const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

// Events:- curser moving, tap, clik etc

buttons.forEach( (btn)=> {
    console.log(btn);
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey')
            body.style.backgroundColor = 'grey'
        else if(e.target.id === 'white')
            body.style.backgroundColor = e.target.id
        else if(e.target.id === 'blue')
            body.style.backgroundColor = e.target.id
        else if(e.target.id === 'yellow')
            body.style.backgroundColor = e.target.id
        else if(e.target.id === 'purple')
            body.style.backgroundColor = e.target.id
    })   // we have to add event listner on each button so that they can work properly
})