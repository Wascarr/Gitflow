// Sistema de Display Avanzado
class DisplayController {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.history = [];
        this.maxDigits = 12;
    }

    updateValue(value) {
        if (this.isValidInput(value)) {
            this.displayElement.value = this.formatValue(value);
            this.history.push(value);
        }
    }

    formatValue(value) {
        if (typeof value === 'number') {
            return value.toLocaleString('es-ES', {
                maximumFractionDigits: 6,
                minimumFractionDigits: 0
            });
        }
        return value;
    }

    isValidInput(value) {
        return value.toString().length <= this.maxDigits;
    }

    clear() {
        this.displayElement.value = '0';
        this.history = [];
    }

    getLastValue() {
        return this.history[this.history.length - 1];
    }

    showError(message) {
        this.displayElement.value = message || 'Error';
        setTimeout(() => this.clear(), 2000);
    }
}

const displayController = new DisplayController();

function appendNumber(num) {
    displayController.updateValue(displayController.displayElement.value + num);
}

function appendOperator(operator) {
    displayController.updateValue(displayController.displayElement.value + operator);
}

function clearDisplay() {
    displayController.clear();
}

function calculate() {
    try {
        const result = eval(displayController.displayElement.value);
        displayController.updateValue(result);
    } catch (error) {
        displayController.showError('Error');
    }
}
