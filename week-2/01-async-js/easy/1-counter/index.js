let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let button = document.getElementById('btn');
let clickStats = false;
let myInterval = "";

function handleClick() {
    let secs = 0;
    let mins = 0;
    if(clickStats === false) {
        button.textContent = 'Reset';
        clickStats = true;
        myInterval = setInterval(function() {
            if(secs === 59) {
                secs = 0;
                seconds.textContent = secs
                minutes.textContent = mins++;
            }
            seconds.textContent = secs++;
        }, 1000)
    }
    else {
        clickStats = false;
        clearInterval(myInterval);
        button.textContent = 'Start';
        mins = 0;
        secs = 0;
        seconds.textContent = 0;
        minutes.textContent = 0;
    }
}

button.addEventListener('click', handleClick);