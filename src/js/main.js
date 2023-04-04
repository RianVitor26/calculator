import { insertValueOnDisplay } from "./insertValueOnDisplay.js"

const buttons = document.querySelectorAll('.button')

export function main() {
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const clickedButtonValue = event.target.innerHTML
            insertValueOnDisplay(clickedButtonValue)
        })
    })
}

main()