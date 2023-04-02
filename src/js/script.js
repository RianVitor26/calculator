const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const value = event.target.innerHTML
        insertValueOnDisplay(value)
    })
})

function insertValueOnDisplay(value) {
    if (value === 'C') {
        clearDisplay()
    }
    else if (value === '=') {
        display.innerHTML = eval(display.innerHTML)
    }
    else
        display.innerHTML += value
}




function clearDisplay() {
    display.innerHTML = ''
}
