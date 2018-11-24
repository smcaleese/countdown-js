var slider1 = document.getElementById('day-calendar-slider');
var slider2 = document.getElementById('hour-clock-slider');
var slider3 = document.getElementById('minute-clock-slider');
var slider4 = document.getElementById('second-clock-slider');

function setSliders() {
    setInterval(setSecondClock, 250);
    var singleSecondPos = 0;
    
    setInterval(set, 1000);
    
    function set() {
        
        // Set minutes in hour clock
        var start2 = new Date();
        start2.setMinutes(0, 0, 0, 0);
        var now2 = new Date();
        var diff2 = now2.getTime() - start2.getTime();
        var diffSeconds2 = diff2 / 1000;
        var renderableDiff2 = (diffSeconds2 / 3600) * 430;
        slider2.style.width = renderableDiff2 + 'px';
        
        // Set seconds in minute clock
        var start3 = new Date();
        start3.setSeconds(0, 0, 0, 0);
        var now3 = new Date();
        var diff3 = now3.getTime() - start3.getTime();
        var diffSeconds3 = diff3 / 1000;
        var renderableDiff3 = (diffSeconds3 / 60) * 430;
        slider3.style.width = renderableDiff3 + 'px';
    }
    
    // Set slider for single second clock
    function setSecondClock() {
        slider4.style.width = singleSecondPos + 'px';
        singleSecondPos = singleSecondPos + 107.5;
        
        if(singleSecondPos > 430) {
           singleSecondPos = 0;
        }
    }
}


window.onload = setSliders;