const numButtons = document.querySelectorAll(".num-btn")
const operatorBtn = document.querySelectorAll(".op-btn")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById(".clear")
const decimalBtn = document.getElementById("decimal")
const display = document.getElementById("display")
const disStatus = document.getElementById("display-status")


display.textContent = 0
disStatus.textContent = '-'



// add event listeners for buttons

// number buttons
numButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        showValue(btn)
    })
})

// operator buttons
operatorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        operatorValue(btn)
    })
})

// clear button

// decimal button

// equals button



// show value in display
const showValue = (value) => {
    if (display.textContent == '0'){
        display.textContent = value.textContent
    } else if (['+', '-', '*', '/'].includes(display.textContent)) {
        disStatus.textContent += ' ' + display.textContent
        display.textContent = value.textContent
    } else {
        display.textContent += value.textContent
    }
}

// operator button - show operator and add display value to status
const operatorValue = (value) => {
    if (disStatus.textContent == '-'){
        disStatus.textContent = display.textContent
    } else {
        disStatus.textContent += ' ' + display.textContent
    }

    display.textContent = value.textContent
}
