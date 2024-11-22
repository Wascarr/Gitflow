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

// Sistema de Entrada Numérica
class NumberInputHandler {
    constructor() {
        this.currentInput = '';
        this.maxLength = 12;
        this.decimalAdded = false;
    }

    handleInput(value) {
        if (this.isValidInput(value)) {
            return this.processInput(value);
        }
        return false;
    }

    processInput(value) {
        if (value === '.' && !this.decimalAdded) {
            this.decimalAdded = true;
            this.currentInput += value;
            return true;
        }

        if (value !== '.') {
            if (this.currentInput === '0' && value !== '0') {
                this.currentInput = value;
            } else if (this.currentInput !== '0') {
                this.currentInput += value;
            }
            return true;
        }
        return false;
    }

    isValidInput(value) {
        const newLength = this.currentInput.length + 1;
        return newLength <= this.maxLength;
    }

    reset() {
        this.currentInput = '';
        this.decimalAdded = false;
    }

    getCurrentValue() {
        return this.currentInput || '0';
    }
}

const numberHandler = new NumberInputHandler();
