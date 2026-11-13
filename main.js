// javascript
const previousOperandElement = document.querySelector("#previous-operand");
const currentOperandElement = document.querySelector("#current-operand");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector("[data-action='clear']");
const deleteButton = document.querySelector("[data-action='delete']");

let currentOperand = "0";
let previousOperand = "";
let operation = undefined;

function updateDisplay() {
  currentOperandElement.innerText = currentOperand;
  if (operation != null) {
    previousOperandElement.innerText = `${previousOperand} ${operation}`;
  } else {
    previousOperandElement.innerText = "";
  }
}

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) {
    return;
  }
  if (currentOperand === "0" && number !== ".") {
    currentOperand = number.toString();
  } else {
    currentOperand = currentOperand.toString() + number.toString();
  }
}

function chooseOperation(op) {
  if (currentOperand === "") {
    return;
  }
  if (previousOperand !== "") {
    compute();
  }

  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) {
    return;
  }

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      if (current == 0) {
        alert("Division by zero error");
        clearAll();
        return;
      }
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = Math.round(computation * 100000000) / 100000000;
  operation = undefined;
  previousOperand = "";
}

function clearAll() {
  currentOperand = "0";
  previousOperand = "";
  operation = undefined;
}
function deleteNumber() {
  if (currentOperand === "0") {
    return;
  }
  if (currentOperand.length === 1) {
    currentOperand = "0";
  } else {
    currentOperand = currentOperand.toString().slice(0, -1);
  }
}

updateDisplay();
