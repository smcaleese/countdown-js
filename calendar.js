var calendar = document.getElementById('calendar');

var dayNum = 79;

function printCalendar() {
    for(var x = 79; x > 0; x--) {
          // Print out each day
          var day = document.createElement('div');
          var p = document.createElement('p');
          p.setAttribute('class', 'dayNums');
          var t = document.createTextNode(dayNum);
          p.appendChild(t);
          day.appendChild(p);
          day.setAttribute('class', 'day');
          calendar.appendChild(day); 
          dayNum--;
    }  
}


window.onload = printCalendar();