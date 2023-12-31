let day = document.getElementById('day');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
const days = ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];

function generateDate() {
    const date = new Date();
    day.textContent = days[date.getDay()].slice(0, 2).toUpperCase();
    hours.textContent = date.getHours();
    minutes.textContent = date.getMinutes();
    seconds.textContent = date.getSeconds();
}

setInterval(generateDate, 1000);