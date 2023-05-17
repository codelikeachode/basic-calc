// Wait for the HTML document to load
document.addEventListener("DOMContentLoaded", function () {
	// Get references to the calculator elements
	const resultElement = document.getElementById("result");
	const clearButton = document.querySelector(".clear");
	const operatorButtons = document.querySelectorAll(".operator");
	const numberButtons = document.querySelectorAll(".number");
	const equalsButton = document.querySelector(".equals");
	const decimalButton = document.querySelector(".decimal");

	// Variables to store calculator state
	let firstOperand = null;
	let operator = null;
	let shouldClearResult = false;

	// Function to update the displayed result
	function updateResult(value) {
		resultElement.value = value;
	}

	// Function to handle the number button clicks
	function handleNumberClick(number) {
		if (shouldClearResult) {
			// Clear the result if a new number is being entered after a calculation
			updateResult("");
			shouldClearResult = false;
		}
		// Append the clicked number to the result
		resultElement.value += number;
	}

	// Function to handle operator button clicks
	function handleOperatorClick(selectedOperator) {
		if (firstOperand === null) {
			// If this is the first operator selected, store the current result as the first operand
			firstOperand = parseFloat(resultElement.value);
		} else {
			// Perform the calculation if an operator and first operand already exist
			const secondOperand = parseFloat(resultElement.value);
			const result = calculateResult(
				firstOperand,
				operator,
				secondOperand
			);
			updateResult(result);
			firstOperand = result; // Store the result as the new first operand for subsequent calculations
		}
		operator = selectedOperator;
		shouldClearResult = true; // Clear the result before entering the next number
	}

	// Function to perform the calculation based on the operator selected
	function calculateResult(firstOperand, operator, secondOperand) {
		switch (operator) {
			case "/":
				return firstOperand / secondOperand;
			case "*":
				return firstOperand * secondOperand;
			case "-":
				return firstOperand - secondOperand;
			case "+":
				return firstOperand + secondOperand;
			default:
				return secondOperand; // If no valid operator is selected, return the second operand
		}
	}

	// Function to handle the equals button click
	function handleEqualsClick() {
		if (firstOperand !== null && operator !== null) {
			const secondOperand = parseFloat(resultElement.value);
			const result = calculateResult(
				firstOperand,
				operator,
				secondOperand
			);
			updateResult(result);
			firstOperand = null; // Reset the first operand for future calculations
			operator = null;
			shouldClearResult = true; // Clear the result before entering the next number
		}
	}

	// Function to handle the decimal button click
	function handleDecimalClick() {
		if (!resultElement.value.includes(".")) {
			// Only add a decimal point if it's not already present in the result
			resultElement.value += ".";
		}
	}

	// Function to handle the clear button click
	function handleClearClick() {
		resultElement.value = ""; // Clear the result
		firstOperand = null; // Reset the first operand
		operator = null;
	}

	// Add event listeners to buttons
	clearButton.addEventListener("click", handleClearClick);

	operatorButtons.forEach(function (operatorButton) {
		operatorButton.addEventListener("click", function () {
			handleOperatorClick(this.textContent);
		});
	});

	numberButtons.forEach(function (numberButton) {
		numberButton.addEventListener("click", function () {
			handleNumberClick(this.textContent);
		});
	});
	equalsButton.addEventListener("click", handleEqualsClick);
	decimalButton.addEventListener("click", handleDecimalClick);
});
