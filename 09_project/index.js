const clock = document.getElementById('clock');
// we can use both 
// const clocks = document.querySelector('#clock')





// this method control the js event which is setInterval method

setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)