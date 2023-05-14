// Initials

let duration = $("#edit-number").text() * 60;
let edit = false;
let milliseconds = 100;
let timeout, timeout1;
let timer_on = 0;
let minutes, seconds;
$("#edit-input").hide();
$("#message").hide();

// Minutes and seconds counter

function timedCount() {
	$("#edit-input").hide(); // Hide input
	edit = false;
	if (duration == 0) { // If count process finished
		clearTimeout(timeout);
		clearTimeout(timeout1);
		duration = $("#edit-number").text() * 60; // Set duration
		return;
	}
	duration--;
	minutes = parseInt(duration / 60, 10); 
	seconds = parseInt(duration % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	$("#timer").text(minutes + ":" + seconds + ":"); // Show minutes and seconds

	timeout = setTimeout(timedCount, 1000); // Execute timedCount in every 1 sec
}

// Milliseconds counter 

function countMilli() {
	if (edit) return; 
	milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
	$("#timer1").text(milliseconds); // Show milliseconds
	milliseconds == 0 ? (milliseconds = 100) : milliseconds--;
	timeout1 = setTimeout(countMilli, 10); // Execute countMilli in every 10 ms
}

// Start button

$("#start").click(function () {
	if (!timer_on) {
		timer_on = 1;
		timedCount();
		countMilli();
	}
});

// Reset button

$("#reset").click(function () {
	clearTimeout(timeout);
	clearTimeout(timeout1);
	$("#edit-input").hide(); // Hide input
	milliseconds = 100;
	duration = $("#edit-number").text() * 60; // Set duration
	$("#timer").text($("#edit-number").text() + ":" + "00" + ":"); // Show minutes and seconds
	$("#timer1").text("00"); // Show milliseconds
	timer_on = 0;
	edit = false;
});

// Editing timer

$("#edit-a").click(function () {
	$("#edit-input").val(""); // Clear input value
	if (edit == true) {
		$("#edit-input").hide(); // Hide input
		edit = false;
		return;
	}
	if (timer_on == 1) { // If timer works at this moment
		$("#message").show();
		$("#message").text("Reset the timer!!");
		$("#message").fadeOut(3000);
		return;
	}
	edit = true;
	$("#edit-input").toggle();
	$("#edit-input").keyup(function (e) { // If pressed to any key in input
		let code = e.which;
		if (code == 13) { // If pressed 'enter' key
			e.preventDefault();
			// Check entered value < 1 or value > 25 
			if ($("#edit-input").val() < 1 || $("#edit-input").val() > 25) { 
				$("#message").show();
				$("#message").text("Number must be between 1-25!!");
				$("#message").fadeOut(3000);
				return;
			} else { // if value is between 1-25
				$("#edit-number").text($("#edit-input").val());
				duration = $("#edit-input").val() * 60; // Set entered value as duration
				edit = false;
			}
			$("#edit-input").hide(); // Hide input
		}
	});
});


