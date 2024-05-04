const display = document.getElementById("display");
const previous = document.getElementById("previous");
let storage = "";

function append(input) {
  if ("+-*/".includes(input) && "+-*/".includes(display.value.slice(-1))) {
    return;
  }
  if (input === "." && display.value.includes(".")) {
    return;
  }

  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function sign() {
  display.value = display.value * -1;
}
function percent() {
  display.value = display.value / 100;
}
function performCalculation() {
  display.value = eval(display.value);
}
