
// variable declaration
let clockTime = document.getElementById("time");
let clockDate = document.getElementById('date')
let startTime;
const date = new Date;

//function to get two digit number
let twoDigit = (n) =>  n > 9 ?  n: "0" + n;

//function to get time
function updateTime (){
    const date = new Date;
    let secs = twoDigit(date.getSeconds())
    let minutes = twoDigit(date.getMinutes())
    let hours = twoDigit(date.getHours())
    clockTime.innerHTML = `${hours}:${minutes}:${secs}`
}

//update date in the clock
let day = twoDigit(date.getDate())
let month = twoDigit(date.getMonth()+1)
let year = date.getFullYear()
clockDate.innerHTML = `${day}/${month}/${year}`

//function for start the clock on window load
window.onload = () => startTime = setInterval(updateTime, 1000);
//function for start button
const startBtnHandler =() => startTime = setInterval(updateTime, 1000);
//function for stop button
const stopBtnHandler =() => startTime = clearInterval(startTime);

//handling start and stop button
document.getElementById('startBtn').addEventListener('click',startBtnHandler)
document.getElementById('stopBtn').addEventListener('click',stopBtnHandler)





