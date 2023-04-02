const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')

let firstValue = 0
let secondValue = 0 
let operator = ''

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const value = event.target.innerHTML
        insertValueOnDisplay(value)
    })
})

function insertValueOnDisplay(value) {
    verifyValues(value)
    if (value === 'C') {
        return
    }
    display.innerHTML += value
}   

function verifyValues(value) {
    switch (value) {
        case 'C':
            clearDisplay()
            break;
        case '': 

        default:
            break;
    }
}


function clearDisplay() {
    display.innerHTML = ''
}