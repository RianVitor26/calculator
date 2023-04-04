const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')

handleEventButtons()

function handleEventButtons() {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const clickedButtonValue = event.target.innerHTML
            insertValueOnDisplay(clickedButtonValue)
        })
    })
}





function insertValueOnDisplay(clickedButtonValue) {

    if (lockOperatorAsFirstElement(clickedButtonValue)) return

    if (verifyClickedButtonValue(clickedButtonValue)) return

    checkDuplicateOperators(clickedButtonValue)

    display.innerHTML += clickedButtonValue
}





function lockOperatorAsFirstElement(clickedButtonValue) {
    const canNotFirstElementOnDisplay = ['*', '/', '+', '.']

    if (display.innerHTML.length === 0 && canNotFirstElementOnDisplay.includes(clickedButtonValue)) {
        return true
    }
}





const buttonActions = {
    'Del': () => {
        deleteLastElementOnDisplay();
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

function verifyClickedButtonValue(clickedButtonValue) {
    const action = buttonActions[clickedButtonValue]
    if (action)  return action()

    return false;
}





function checkDuplicateOperators(clickedButtonValue) {
    const lastElementOnDisplay = display.innerHTML[display.innerHTML.length - 1]
    const isLastElementNotNumber = !Number(lastElementOnDisplay);
    const isClickedButtonNotNumber = !Number(clickedButtonValue);
    const isLastElementNotZero = lastElementOnDisplay !== 0;
    const isClickedButtonNotZero = clickedButtonValue !== 0;

    if (isLastElementNotNumber && isClickedButtonNotNumber && isLastElementNotZero && isClickedButtonNotZero) {
        deleteLastElementOnDisplay();
    }
}





function deleteLastElementOnDisplay() {
    display.innerHTML = display.innerHTML.slice(0, -1)
}





function clearDisplay() {
    display.innerHTML = ''
}





function calculateResultOnDisplay() {
    try {
        display.innerHTML = eval(display.innerHTML)
    } catch (messageError) {
        display.innerHTML = ''
    }
}

