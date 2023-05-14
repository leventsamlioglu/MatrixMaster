let duration = 25 * 60;
let duration1 = 25 * 60 * 60
let timeout,timeout1;
let timer_on = 0;
var minutes, seconds, miliseconds;


function timedCount() {
    minutes = parseInt(duration / 60, 10);
  seconds = parseInt(duration % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
	$("#timer").text(minutes + ":" + seconds + ':');
	duration--;
	timeout = setTimeout(timedCount, 1000);
}

function countMili(){
    miliseconds = parseInt(duration1%100, 10);
    miliseconds = miliseconds < 10 ? '0' + miliseconds: miliseconds
    duration1--
	$("#timer1").text(miliseconds);

    timeout1 = setTimeout(countMili,10)

}

$("#start").click(function () {
	if (!timer_on) {
		timer_on = 1;
        countMili()
		timedCount();
	}
});

$("#reset").click(function () {
	clearTimeout(timeout);
	clearTimeout(timeout1);

	duration = 25*60;
	duration1 = 25*60;
	timer_on = 0;
});



