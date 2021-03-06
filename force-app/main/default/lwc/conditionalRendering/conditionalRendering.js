import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track displayDiv = false;

    @track cityList = ["Madison", "Green Bay", "Milwaukee", "Eau Claire"];

    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }
}