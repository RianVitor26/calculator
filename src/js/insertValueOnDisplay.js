import { verifyFirstElement, verifyDuplicateOperators, verifyClickedButtonValue } from "./checkers.js"

const display = document.querySelector('.display')

export function insertValueOnDisplay(clickedButtonValue) {

    if (verifyFirstElement(clickedButtonValue)) return

    if (verifyClickedButtonValue(clickedButtonValue)) return

    verifyDuplicateOperators(clickedButtonValue)

    display.innerHTML += clickedButtonValue
}