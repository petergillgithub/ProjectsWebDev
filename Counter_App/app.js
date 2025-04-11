const countDisplay = document.getElementById("count");
const increment_Button = document.getElementById("increment_Button");
const decrease_Button = document.getElementById("decrease_Button");
const incountDisplay = document.getElementById("incount");
const decountDisplay = document.getElementById("decount");

let count = 0;
let incount = 0;
let decount = 0;

function updateDisplay() {
  countDisplay.textContent = count;
  incountDisplay.textContent = incount;
  decountDisplay.textContent = decount;
}

function inc() {
  count++;
  incount++;
  updateDisplay();
}

function dec() {
  count--;
  decount++;
  updateDisplay();
}

increment_Button.addEventListener("click", inc);
decrease_Button.addEventListener("click", dec);
