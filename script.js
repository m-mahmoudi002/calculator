const display = document.getElementById("display");
let expression = "";

function appendNumber(input) {
  if (input === "." && display.value.includes(".")) {
    return;
  }
  display.value += input;
  return display.value;
}

function appendOperator(input) {
  if (display.value !== "") {
    expression += display.value + input;
    display.value = "";
  }
}

function power(input) {
  if (display.value !== "") {
    expression += display.value + input;
    display.value = "";
    if (input === "r") {
      let index = expression.indexOf("r");
      if (index !== -1 && index > 0 && index < expression.length - 2) {
        let x = expression[index - 1];
        let y = expression[index + 2];
        let replacedExpression = expression.replace(
          "r",
          `Math.pow(${x}, ${y})`
        );
        expression = replacedExpression;
        return expression;
      }
    }
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
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function factorial(number) {
  if (number === 0 || number === 1) {
    return (display.value = 1);
  } else if (number > 1 && Number.isInteger(number)) {
    let fact = 1;
    let i;
    for (i = number; i > 1; i--) {
      fact = fact * i;
    }
    return (display.value = fact);
  } else {
    return (display.value = "Error");
  }
}

function advanced(input) {
  if (input === "rand") {
    display.value = Math.random();
  }
  if (input === "pi") {
    display.value = Math.PI;
  }
  if (input === "e") {
    display.value = Math.E;
  }
  if (display.value != "") {
    if (input === "!") {
      let number = parseFloat(display.value);
      factorial(number);
    }
    if (input === "x^2") {
      display.value = display.value ** 2;
    }
    if (input === "x^3") {
      display.value = display.value ** 3;
    }
    //x^y
    if (input === "e^x") {
      display.value = Math.exp(display.value);
    }
    if (input === "10^x") {
      display.value = 10 ** display.value;
    }
    if (input === "sqrt") {
      display.value = Math.sqrt(display.value);
    }
    if (input === "cube") {
      display.value = Math.cbrt(display.value);
    }
    //
    if (input === "ln") {
      display.value = Math.log(display.value);
    }
    if (input === "log10") {
      display.value = Math.log10(display.value);
    }

    if (input === "tan") {
      display.value = Math.tan(toRadians(display.value));
    }
    if (input === "cos") {
      display.value = Math.cos(toRadians(display.value));
    }
    if (input === "sin") {
      display.value = Math.sin(toRadians(display.value));
    }
    if (input === "tanh") {
      display.value = Math.tanh(display.value);
    }
    if (input === "cosh") {
      display.value = Math.cosh(display.value);
    }
    if (input === "sinh") {
      display.value = Math.sinh(display.value);
    }
  } else {
    display.value = "Not a Number";
  }
}
