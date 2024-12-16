let a, b, operatorValue;
function nin(number) {
  const display = document.getElementById("display");
  display.innerText += number;
}

function cls() {
  const display = document.getElementById("display");
  display.innerText = "";
}

function cancel() {
  const display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1);
}

function operator(op) {
  const display = document.getElementById("display");
  if (display.innerText) {
    a = parseFloat(display.innerText);
    operatorValue = op;
    cls();
  }
}

function calculate() {
  const display = document.getElementById("display");
  if (a !== undefined && operatorValue) {
    b = parseFloat(display.innerText);
    let result;
    switch (operatorValue) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b !== 0 ? a / b : "Error";
        break;
      default:
        result = "Error";
    }
    display.innerText = result;
    a = b = operatorValue = undefined;
  }
}
