const display = document.getElementById("display");

function append(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function performCalculation() {
  display.value = eval(display.value);
}
function sign() {
  display.value = display.value * -1;
}
