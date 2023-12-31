// incomplete
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let button = document.getElementById('btn');
let clickStats = false;
let myInterval = "";
let myTimeout = "";

function handleClick() {
    let secs = 0;
    let mins = 0;
    if(clickStats === false) {
        button.textContent = 'Reset';
        clickStats = true;
    }
    else {
            clickStats = false;
            button.textContent = 'Start';
            mins = 0;
            secs = 0;
            seconds.textContent = 0;
            minutes.textContent = 0;
    }
        myInterval = function(fn, delay, clickStats) {
            const wrapper = () => {
              fn();
              if(clickStats === false) {
                clearTimeout(myTimeout);
                return;
              }
              myTimeout = function(wrapper, delay){
                return setTimeout(wrapper, delay);
              }
              return myTimeout;
            }
            if(clickStats === false) {
                clearTimeout(myTimeout);
                return;
            };
            myTimeout(wrapper, delay);
          }

          myInterval(function() {
                 if(secs === 59) {
                    secs = 0;
                    seconds.textContent = secs
                    minutes.textContent = mins++;
                }
                seconds.textContent = secs++;
            }, 1000);          
    }

button.addEventListener('click', handleClick);