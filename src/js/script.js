const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const value = event.target.innerHTML
        insertValueOnDisplay(value)
    })
})

function insertValueOnDisplay(clickedButtonValue) {

    let lastElementTyped = display.innerHTML[display.innerHTML.length - 1]
    let operators = ['*', '/']
    console.log(lastElementTyped)

    if (display.innerHTML.length === 0 && operators.includes(clickedButtonValue) ) {
        return
    }
   

    if (clickedButtonValue === 'DEL') {
        deleteLastElement()
        return
     }

    if (clickedButtonValue === 'X') {
         display.innerHTML += clickedButtonValue.replace('X', '*')
        return
    }

    if (clickedButtonValue === 'C') {
        clearDisplay()
        return
    }

    if (clickedButtonValue === '=') {
        calculateResult()
        return
    }

    if (lastElementTyped && !Number(lastElementTyped) && !Number(clickedButtonValue)) {
        deleteLastElement()
    }

    

    display.innerHTML += clickedButtonValue
}


function clearDisplay() {
    display.innerHTML = ''
}

function deleteLastElement() {
     display.innerHTML = display.innerHTML.slice(0, -1)
}

function calculateResult() {
    try {
        display.innerHTML = eval(display.innerHTML)
    } catch (error) {
        display.innerHTML = ''
        console.log(error)
    }
}
