import { calculateResultOnDisplay, clearDisplay, deleteLastElementOnDisplay } from "./utils.js"

const display = document.querySelector('.display')


export function verifyFirstElement(clickedButtonValue) {
    const canNotFirstElementOnDisplay = ['*', '/', '+', '.']

    if (display.innerHTML.length === 0 && canNotFirstElementOnDisplay.includes(clickedButtonValue)) {
        return true
    }
}


const buttonActions = {
    'Del': () => {
        deleteLastElementOnDisplay()
        return true;
    },
    'x': () => {
        display.innerHTML += '*';
        return true;
    },
    'C': () => {
        clearDisplay();
        return true;
    },
    '=': () => {
        calculateResultOnDisplay();
        return true;
    }
}


export function verifyClickedButtonValue(clickedButtonValue) {
    const action = buttonActions[clickedButtonValue]
    if (action) return action()

    return false;
}


export function verifyDuplicateOperators(clickedButtonValue) {
    const lastElementOnDisplay = display.innerHTML[display.innerHTML.length - 1]
    const isLastElementNotNumber = !Number(lastElementOnDisplay);
    const isClickedButtonNotNumber = !Number(clickedButtonValue);
    const isLastElementNotZero = lastElementOnDisplay != 0;
    const isClickedButtonNotZero = clickedButtonValue != 0;

    if (isLastElementNotNumber && isClickedButtonNotNumber && isLastElementNotZero && isClickedButtonNotZero) {
        deleteLastElementOnDisplay();
    }
}





