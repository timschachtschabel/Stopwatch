let secondsElapsed = 0;
let minutesElapsed = 2;
let hoursElapsed = 0;
let roundsElapsed = 0;

let roundTimes = document.getElementById('roundTimes');
let newRound = document.createElement('li');

let timer;

let paused = false;

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


const startButton = document.getElementById("startbutton");
const resetButton = document.getElementById("resetbutton");
const stopButton = document.getElementById("stopbutton");
const roundButton = document.getElementById("roundbutton");

function startTimer() {
        timer = setInterval(function(){
        startButton.style.display = 'none';
        resetButton.style.display = 'block';
        stopButton.style.display = 'block';
        
        if(paused == false) {
            stopButton.innerHTML = 'Stop'
            secondsElapsed += 1;

            if (secondsElapsed < 10) {
                seconds.innerHTML = '0' + secondsElapsed;
            }  
            else {
                seconds.innerHTML = secondsElapsed;
            }  

            if (secondsElapsed > 59) {
                secondsElapsed = 0;
                minutesElapsed += 1;

                minutes.innerHTML = minutesElapsed;
            }
            
            if (minutesElapsed > 59) {
                minutesElapsed = 0;
                hoursElapsed += 1;

                hours.innerHTML =  hoursElapsed
            }

            if (minutesElapsed < 10) {
                minutes.innerHTML = '0' + minutesElapsed;
            }

        } 
        else {
            if (secondsElapsed < 10) {
                seconds.innerHTML = '0' + secondsElapsed;
            }

            if (minutesElapsed < 10) {
                minutes.innerHTML = '0' + minutesElapsed;
            }

            stopButton.innerHTML = 'Resume';
            clearInterval(timer);
        }  

     }, 1000);
}


function resetTimer() {
    resetButton.style.display ='none';
    startButton.style.display = 'block';
    stopButton.style.display = 'none';

    secondsElapsed = 0;
    minutesElapsed = 0;
    hoursElapsed = 0;

    seconds.innerHTML = '00'
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    clearInterval(timer);
}

function pauseTimer() {
    if (paused == false) {
        paused = true;
        clearInterval(timer);
        startTimer();
    }
    else {
        paused = false;
        clearInterval(timer);
        startTimer();
    }
}

function saveRounds() {

}

function createNewRound() {

}


startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', pauseTimer);
roundButton.addEventListener('click', saveRounds);
