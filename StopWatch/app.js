const display = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let milliseconds = 0;
let interValid = null;

function updateDisplay() {
  let min = Math.floor(milliseconds / 6000);
  let sec = Math.floor((milliseconds % 6000) / 1000);
  let ms = milliseconds % 1000;

  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  ms = ms < 100 ? (ms < 10 ? `00${ms}` : `0${ms}`) : ms;

  display.textContent = `${min}: ${sec}: ${ms}`;
}

startButton.addEventListener("click", function () {
  if (interValid === null) {
    interValid = setInterval(function () {
      milliseconds += 10;
      updateDisplay();
    }, 10);
  }
});

stopButton.addEventListener("click", function () {
  clearInterval(interValid);
  interValid = null;
});

resetButton.addEventListener("click", function () {
  clearInterval(interValid);
  milliseconds = 0;
  updateDisplay();
});
