// Variables globales
let displayValue = '0';
let firstNumber = null;
let waitingForSecondNumber = false;
let operator = null;

// Funciones matemáticas mejoradas
class Calculator {
    static add(x, y) { return x + y; }
    static subtract(x, y) { return x - y; }
    static multiply(x, y) { return x * y; }
    static divide(x, y) { return y !== 0 ? x / y : 'Error'; }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function inputDigit(digit) {
    if (waitingForSecondNumber) {
        displayValue = digit;
        waitingForSecondNumber = false;
    } else {
        displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    updateDisplay();
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);
    
    if (firstNumber === null) {
        firstNumber = inputValue;
    } else if (operator) {
        const result = performCalculation();
        displayValue = String(result);
        firstNumber = result;
    }
    
    waitingForSecondNumber = true;
    operator = nextOperator;
}

function performCalculation() {
    const secondNumber = parseFloat(displayValue);
    
    switch (operator) {
        case '+': return Calculator.add(firstNumber, secondNumber);
        case '-': return Calculator.subtract(firstNumber, secondNumber);
        case '*': return Calculator.multiply(firstNumber, secondNumber);
        case '/': return Calculator.divide(firstNumber, secondNumber);
        default: return secondNumber;
    }
}
