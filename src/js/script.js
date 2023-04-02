//PEGA VISOR E BOTÕES
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const value = event.target.innerHTML
        insertValueOnDisplay(value)
    })
})

function insertValueOnDisplay(clickedButtonValue) {
    console.log(clickedButtonValue)

    if (clickedButtonValue === 'C') {
        clearDisplay()
        return
    }

    if (clickedButtonValue === '=') {
        calculateResult()
        return
    }

    display.innerHTML += clickedButtonValue
}


function clearDisplay() {
    display.innerHTML = ''
}

function deleteLastElement() {
    display.innerHTML = display.innerHTML.split(0, -1)
}

function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML)
    } catch (error) {
        display.innerHTML = ''
    }
}