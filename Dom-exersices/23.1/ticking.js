let clock = document.querySelector('#clock');

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function renderTime() {
    var d = new Date();
   
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return clock.textContent = h + ":" + m + ":" + s;
}
setInterval(renderTime, 1000)