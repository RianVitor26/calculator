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
    if (value === 'C' || value === '=') {
        return
    }
    display.innerHTML += value
}   

function verifyValues(value) {
    switch (value) {
        case 'C':
            clearDisplay()
            break;
        case '=':
            calculateAccount()
            break;
        case '+':
            add()
            break;
        case '-':
            subtract()
            break;
        case 'x':
            multiply()
            break;
        case '/':
            divide()
            break;
        default:
            break;
    }
}


function clearDisplay() {
    display.innerHTML = ''
}

function calculateAccount() {
    console.log('calcular')
}
function add() {
    console.log('add')
}
function subtract() {
    console.log('subtrair')
}
function multiply() {
    console.log('multiplicar')
}
function divide() {
    console.log('dividir')
}
