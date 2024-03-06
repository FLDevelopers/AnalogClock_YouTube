let hourHand = document.getElementById('hour');
let minuteHand = document.getElementById('minute');
let secondHand = document.getElementById('second');

setInterval(displayCurrentTime, 1000);

function displayCurrentTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30 * hours + minutes / 2;
    let minuteRotation = 6 * minutes;
    let secondRotation = 6 * seconds;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}