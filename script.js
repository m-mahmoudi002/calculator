const display = document.getElementById("display");
let expression = "";

function appendNumber(input) {
  if (input === "." && display.value.includes(".")) {
    return;
  }
  display.value += input;
}

function appendOperator(input) {
  if (display.value !== "") {
    expression += display.value + input;
    display.value = "";
  }
}

function performCalculation() {
  if (expression !== "") {
    expression += display.value;
    display.value = eval(expression);
    expression = "";
  }
}

function clearDisplay() {
  display.value = "";
}

function sign() {
  display.value = parseFloat(display.value) * -1;
}

function percent() {
  display.value = parseFloat(display.value) / 100;
}
