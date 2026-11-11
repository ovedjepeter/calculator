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
let operation = "undefined";

function updateDisplay() {
  currentOperandElement.innerText = currentOperand;
  if (operation != null) {
    previousOperandElement.innerText = `${previousOperand} ${operation}`;
  } else {
    previousOperandElement.innerText = "";
  }
}

updateDisplay();
