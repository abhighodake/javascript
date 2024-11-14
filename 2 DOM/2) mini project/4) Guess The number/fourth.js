const clock = document.querySelector("#clock")



// with this you can display the timme but wehn you refresh page then it will give accurate time
//clock.innerHTML = date.toLocaleTimeString()




// instead of use following method to display time second wise
// setInterval method

setInterval(function(){
    let date = new Date()
    clock.innerHTML =  date.toLocaleTimeString()
} ,1000)   // this method take two arguments one is function and another is time interval in miliseconds