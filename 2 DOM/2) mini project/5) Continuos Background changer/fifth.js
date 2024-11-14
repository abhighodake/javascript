let colorSelector = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId

const startChaingingColor = function() {

    if(!intervalId){   // if(intervalId === NULL)
        intervalId = setInterval(changeBg, 1000)
    }
    

    function changeBg(){
        document.querySelector("body").style.backgroundColor = colorSelector();
    }  
    
}


const stopChaingingColor = function() {
    clearInterval(intervalId)
    intervalId = null
}


document.querySelector("#start").addEventListener('click',startChaingingColor);

document.querySelector("#stop").addEventListener('click',stopChaingingColor);



/*
const startColorChanger = function(){
    document.querySelector("body").style.background = colorSelector() 
}

let intervalId = setInterval(startColorChanger,1000)

document.querySelector("#start").addEventListener('click',startColorChanger)

/*/
