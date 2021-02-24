const stopwatch = document.querySelector('#stopwatch')
const start = document.querySelector('#start')
const end = document.querySelector('#end')
const reset = document.querySelector('#reset')
const spanTime = document.querySelector("#display")

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}


start.addEventListener("click", play)
end.addEventListener("click", stope)
reset.addEventListener("click", again)

let startTime
let elapsedTime = 0
let timerInterval;

function play() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        spanTime.innerHTML = timeToString(elapsedTime);
    }, 10)
}
function stope() {
    clearInterval(timerInterval);
}
function again() {
    clearInterval(timerInterval);
    spanTime.innerHTML="00:00:00";
    elapsedTime = 0;
}