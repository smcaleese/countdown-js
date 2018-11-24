var timeSlider = document.getElementById('time-slider');
var initWidth = 88 * 79;

function setInitWidth() {
	timeSlider.style.width = initWidth + "px";
}

function setSlider() {
	var start = new Date(2018, 1, 17)
	var now = new Date();
	var diff = now.getTime() - start.getTime();
	var diffSeconds = (diff / 1000);
	var diffDays = diffSeconds / 86400;
	diffDays = diffDays * 88;
	timeSlider.style.width = (initWidth - diffDays) + "px";
}

setInitWidth();
time = setInterval(function() {
    setTimeout(setSlider, 5);
}, 1000); 