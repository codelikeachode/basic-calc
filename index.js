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
});
