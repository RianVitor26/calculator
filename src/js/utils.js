const display = document.querySelector('.display')

export function deleteLastElementOnDisplay() {
    display.innerHTML = display.innerHTML.slice(0, -1)
}

export function clearDisplay() {
    display.innerHTML = ''
}

export function calculateResultOnDisplay() {
    try {
        display.innerHTML = eval(display.innerHTML)
    } catch (messageError) {
        display.innerHTML = ''
    }
}

