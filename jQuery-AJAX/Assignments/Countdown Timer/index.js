let duration = $("#edit-number").text() * 60;
let edit = false;
let milli = 100;
let timeout, timeout1;
let timer_on = 0;
var minutes, seconds, milliseconds;

function timedCount() {
	if (edit) return;
	if (duration == 0) {
		clearTimeout(timeout);
		clearTimeout(timeout1);
		duration = $("#edit-number").text() * 60;
		return;
	}
	duration--;
	minutes = parseInt(duration / 60, 10);
	seconds = parseInt(duration % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	$("#timer").text(minutes + ":" + seconds + ":");

	timeout = setTimeout(timedCount, 1000);
}

function countMili() {
	if (edit) return;
	milliseconds = milli < 10 ? "0" + milli : milli;
	$("#timer1").text(milliseconds);
	milli == 0 ? (milli = 100) : milli--;
	timeout1 = setTimeout(countMili, 10);
}

$("#start").click(function () {
	if (!timer_on) {
		timer_on = 1;
		timedCount();
		countMili();
	}
});

$("#reset").click(function () {
	clearTimeout(timeout);
	clearTimeout(timeout1);
	milli = 100;
	duration = $("#edit-input").val() * 60;
	$("#timer").text($("#edit-number").text() + ":" + "00" + ":");
	$("#timer1").text("00");
	timer_on = 0;
});

$("#edit-input").hide();
$("#message").hide();

$("#edit-a").click(function () {
	if (timer_on == 1) {
		$("#message").show();
		$("#message").text("Reset the timer!!");
		$("#message").fadeOut(3000);
		return;
	}
	edit = true;
	$("#edit-input").toggle();
	$("#edit-input").keyup(function (e) {
		var code = e.which;
		if (code == 13) {
			e.preventDefault();
			if ($("#edit-input").val() == (NaN || 0)) {
				$("#edit-number").text("00");
			} else {
				$("#edit-number").text($("#edit-input").val());
				duration = $("#edit-input").val() * 60;
				edit = false;
			}
			$("#edit-input").val("");
			$("#edit-input").hide();
		}
	});
});
