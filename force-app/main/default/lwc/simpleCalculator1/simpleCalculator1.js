import { LightningElement, track } from 'lwc';

export default class SimpleCalculator1 extends LightningElement {

    @track currentResult;

    firstNumber;
    secondNumber;

    numberChangeHandler(event) {
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber') {
            this.firstNumber = event.target.value;
        }else {
            this.secondNumber = event.target.value;
        }
    }

    addHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `The Result of ${firstN} + ${secondN} is ${firstN + secondN}`;
    }

    subtractHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `The Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
    }

    multiplyHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `The Result of ${firstN} * ${secondN} is ${firstN * secondN}`;
    }

    divideHandler() {
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `The Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
    }
}