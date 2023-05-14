let duration = $("#edit-number").text() * 60;
let edit = false;
let milli = 100;
let timeout, timeout1;
let timer_on = 0;
var minutes, seconds, milliseconds;

function timedCount() {
	$("#edit-input").hide();
	edit = false;
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
	$("#edit-input").hide();
	milli = 100;
	duration = $("#edit-number").text() * 60;
	$("#timer").text($("#edit-number").text() + ":" + "00" + ":");
	$("#timer1").text("00");
	timer_on = 0;
	edit = false;
});

$("#edit-input").hide();
$("#message").hide();

$("#edit-a").click(function () {
	$("#edit-input").val("");
	if (edit == true) {
		$("#edit-input").hide();
		edit = false;
		return;
	}
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
			if ($("#edit-input").val() < 1 || $("#edit-input").val() > 25) {
				$("#message").show();
				$("#message").text("Number must be between 1-25!!");
				$("#message").fadeOut(3000);
				return;
			} else {
				$("#edit-number").text($("#edit-input").val());
				duration = $("#edit-input").val() * 60;
				edit = false;
			}
			$("#edit-input").hide();
		}
	});
});


