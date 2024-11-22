let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Sistema de Manejo de Operadores
class OperatorHandler {
    constructor() {
        this.currentOperator = null;
        this.previousOperator = null;
        this.waitingForOperand = false;
    }

    handleOperator(operator) {
        const validOperators = ['+', '-', '*', '/'];
        
        if (validOperators.includes(operator)) {
            this.previousOperator = this.currentOperator;
            this.currentOperator = operator;
            this.waitingForOperand = true;
            return true;
        }
        return false;
    }

    executeOperation(firstNumber, secondNumber) {
        switch(this.currentOperator) {
            case '+':
                return this.add(firstNumber, secondNumber);
            case '-':
                return this.subtract(firstNumber, secondNumber);
            case '*':
                return this.multiply(firstNumber, secondNumber);
            case '/':
                return this.divide(firstNumber, secondNumber);
            default:
                return secondNumber;
        }
    }

    add(a, b) { return parseFloat(a) + parseFloat(b); }
    subtract(a, b) { return parseFloat(a) - parseFloat(b); }
    multiply(a, b) { return parseFloat(a) * parseFloat(b); }
    divide(a, b) { return b !== '0' ? parseFloat(a) / parseFloat(b) : 'Error'; }

    reset() {
        this.currentOperator = null;
        this.previousOperator = null;
        this.waitingForOperand = false;
    }
}

const operatorHandler = new OperatorHandler();
