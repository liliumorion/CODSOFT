let currentOperand = "";
let previousOperand = "";
let operation = undefined;

function clearCalculatorScreen() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
}

// This function deletes last entered number from screen
function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
}

// This function appends a number from screen
function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
}

// This function is called when we click on the operation symbols (+,-,*,%)
function selectOperation(selectedOperation) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  operation = selectedOperation;
  previousOperand = currentOperand;
  currentOperand = "";
}

// This function is called when we calculate the result
function calculate() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
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
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operation = undefined;
  previousOperand = "";
}

// This function is used to format numbers as strings to be showed in display
function formatNumberForDisplay(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

// This function is used to update the UI, and show text on the calculator
// screen
function updateCalculatorDisplay() {
  currentOperandTextElement.innerText = formatNumberForDisplay(currentOperand);
  if (operation != null) {
    previousOperandTextElement.innerText = `${formatNumberForDisplay(
      previousOperand
    )} ${operation}`;
  } else {
    previousOperandTextElement.innerText = "";
  }
}

// This is our instantiation function
function Calculator(previousOperandTextElement, currentOperandTextElement) {
  previousOperandTextElement = previousOperandTextElement;
  currentOperandTextElement = currentOperandTextElement;
  clearCalculatorScreen();
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
/* 
const calculator = Calculator(
  previousOperandTextElement,
  currentOperandTextElement
); */

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateCalculatorDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectOperation(button.dataset.operation);
    updateCalculatorDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculate();
  updateCalculatorDisplay();
});

allClearButton.addEventListener("click", (button) => {
  clearCalculatorScreen();
  updateCalculatorDisplay();
});

deleteButton.addEventListener("click", (button) => {
  deleteNumber();
  updateCalculatorDisplay();
});
