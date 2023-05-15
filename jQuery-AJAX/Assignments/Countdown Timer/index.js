// Initials

let duration = $("#edit-number").text() * 60;
let edit = false;
let timeout;
let timer_on = 0;
let minutes, seconds;
$("#edit-input").hide();
$("#message").hide();

// Minutes and seconds counter

function timedCount() {
	$("#edit-input").hide(); // Hide input
	edit = false;
	if (duration == 0) {
		// If count process finished
		beep();
		clearTimeout(timeout);
		duration = $("#edit-number").text() * 60; // Set duration
		return;
	}
	duration--;
	minutes = parseInt(duration / 60, 10);
	seconds = parseInt(duration % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	$("#timer").text("00:" + minutes + ":" + seconds); // Show minutes and seconds

	timeout = setTimeout(timedCount, 1000); // Execute timedCount in every 1 sec
}

// Start button

$("#start").click(function () {
	if (!timer_on) {
		timer_on = 1;
		timedCount();
	}
});

// Reset button

$("#reset").click(function () {
	clearTimeout(timeout);
	$("#edit-input").hide(); // Hide input
	duration = $("#edit-number").text() * 60; // Set duration
	$("#timer").text("00:" + $("#edit-number").text() + ":" + "00"); // Show minutes and seconds
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
	if (timer_on == 1) {
		// If timer works at this moment
		$("#message").show();
		$("#message").text("Reset the timer!!");
		$("#message").fadeOut(3000);
		return;
	}
	edit = true;
	$("#edit-input").toggle();
	$("#edit-input").keyup(function (e) {
		// If pressed to any key in input
		let code = e.which;
		if (code == 13) {
			// If pressed 'enter' key
			e.preventDefault();
			// Check entered value < 1 or value > 25
			if ($("#edit-input").val() < 1 || $("#edit-input").val() > 25) {
				$("#message").show();
				$("#message").text("Number must be between 1-25!!");
				$("#message").fadeOut(3000);
				return;
			} else {
				// if value is between 1-25 but < 10 
				if ($("#edit-input").val() < 10) {
					// add a 0 as first digit
					$("#edit-number").text("0" + $("#edit-input").val());
				} else {
					$("#edit-number").text($("#edit-input").val());
				}
				duration = $("#edit-input").val() * 60; // Set entered value as duration
				edit = false;
			}
			$("#edit-input").hide(); // Hide input
		}
	});
});

function beep() {
	var snd = new Audio(
		"https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3"
	);

	snd.play();
}
