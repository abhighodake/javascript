let randomNumber = parseInt( Math.random() * 100 + 1);


const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessFiled")
const guestSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHighValue = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

// here we just validate the user input is number or not
function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess==='')
    {
        alert('Please enter a valid number between 1 to 100')
    }
    else
    {
        prevGuess.push(guess) // add guess to previous guess array
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
            
        }
        
    }
}

// here we check the user input is equal to random number or low or high to random number
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guested right!`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}


// here we display guess
function displayGuess(guess){
    userInput.value = ''  // here we emty or delete the value stored in userinput so user can enter new value
    guestSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

// here we display the message  here we display message is it matching or low or high
function displayMessage(message){
    lowOrHighValue.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt( Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guestSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}