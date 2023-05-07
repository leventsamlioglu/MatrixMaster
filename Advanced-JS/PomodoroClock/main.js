// ----------------------------------------------------
// DOM

const breakDec = document.getElementById("break-dec");
const breakInc = document.getElementById("break-inc");
const sessionDec = document.getElementById("session-dec");
const sessionInc = document.getElementById("session-inc");
const breakValue = document.getElementById("break-value");
const sessionValue = document.getElementById("session-value");
const showMinutes = document.getElementById("show-minutes");
const showSeconds = document.getElementById("show-seconds");
const counter = document.getElementById("counter");
const title = document.getElementById("title");

// ----------------------------------------------------
// Initials

var breakLength = 5;
var sessionLength = 25;
var pause = true;
var counting;
var duration = 60 * sessionLength;
var minutes, seconds;

// ----------------------------------------------------
// Window onload

window.addEventListener("load", function () {
  breakValue.innerHTML = breakLength;
  sessionValue.innerHTML = sessionLength;
  showMinutes.innerHTML = sessionLength + ':00';
});

// ----------------------------------------------------
// Increment/Decrement buttons functions

function decreaseBreakLength() {
  if (breakLength > 1) {
    breakLength--;
    breakValue.innerHTML = breakLength;
  }
}

function increaseBreakLength() {
  if (breakLength < 30) {
    breakLength++;
    breakValue.innerHTML = breakLength;
  }
}

function decreaseSessionLength() {
  if (sessionLength > 1) {
    sessionLength--;
    updateTimer();
  }
}

function increaseSessionLength() {
  if (sessionLength < 50) {
    sessionLength++;
    updateTimer();
  }
}

// ----------------------------------------------------
// Function updateTimer

function updateTimer() {
  duration = 60 * sessionLength;
  clearInterval(counting);
  sessionValue.innerHTML = sessionLength;
  title.innerText = "Session";
  showMinutes.innerHTML = sessionLength + ':00';
}

// ----------------------------------------------------
// Function timer

function timer() {
  minutes = parseInt(duration / 60, 10);
  seconds = parseInt(duration % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  showMinutes.innerHTML = minutes + ":" + seconds;
  --duration;

  if (duration == -1) {
    if (title.innerText == "Session") {
      title.innerText = "Break!!!";
      duration = breakLength * 60;
    } else {
      title.innerText = "Session";
      duration = sessionLength * 60;
    }
  }
}

// ----------------------------------------------------
// Button listeners

breakDec.addEventListener("click", decreaseBreakLength, false);
breakInc.addEventListener("click", increaseBreakLength, false);
sessionDec.addEventListener("click", decreaseSessionLength, false);
sessionInc.addEventListener("click", increaseSessionLength, false);

// ----------------------------------------------------
// Timer event listener

counter.addEventListener(
  "click",
  function () {
    if (pause) {
      counting = setInterval(timer, 1000);
      pause = false;
    } else {
      clearInterval(counting);
      pause = true;
    }
  },
  false
);

