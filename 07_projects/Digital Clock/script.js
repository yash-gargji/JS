const clock = document.getElementById('clock')


let date = new Date();

console.log(date.toLocaleString());

setInterval(function(){
       let date = new Date();
       const time = date.toLocaleTimeString();
     
      clock.innerHTML = `<p> ${time} </p>`
} ,1000)