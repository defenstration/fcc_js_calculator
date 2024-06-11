const numButtons = document.querySelectorAll(".num-btn")
const operatorBtn = document.querySelectorAll(".op-btn")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById("clear")
const decimalBtn = document.getElementById("decimal")
const display = document.getElementById("display")
const disStatus = document.getElementById("display-status")


display.textContent = 0
disStatus.textContent = '-'
let outcome = ''


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
clearBtn.addEventListener("click", () => {
    display.textContent = 0
    disStatus.textContent = '-'
    outcome = ''
})

// decimal button
decimalBtn.addEventListener("click", () => {
    if (display.textContent.includes('.')) {
        return
    } else {
        display.textContent += '.'
    }
})

// equals button
equalsBtn.addEventListener("click", () => {
    if (display.textContent && !['+', '-', '*', '/'].includes(display.textContent)) {
        disStatus.textContent += ' ' + display.textContent
    }
    // generate outcome
    outcome = eval(disStatus.textContent)
    disStatus.textContent += ' = ' + outcome
    display.textContent = outcome
    
    
})

// show value in display
const showValue = (value) => {
    if (display.textContent == '0' || disStatus.textContent.includes('=')){
        disStatus.textContent = '-'
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
    if (disStatus.textContent == '-' && display.textContent == '0'){
        return
    } else if (disStatus.textContent.includes('=')) {
        disStatus.textContent = outcome
    } else if (value.textContent.includes('-') && ['+', '-', '*', '/'].includes(display.textContent) && disStatus.textContent.slice(-1) !== "-") {
        disStatus.textContent += ' ' + display.textContent
    } else if (['+', '-', '*', '/'].includes(display.textContent)) {
        display.textContent = value.textContent
    } else if (disStatus.textContent == '-'){
        disStatus.textContent += display.textContent
    } else {
        disStatus.textContent += ' ' + display.textContent
    }

    display.textContent = value.textContent
}

