const buttons = document.querySelectorAll(".btn")
const display = document.getElementById("display")
const disStatus = document.getElementById("display-status")


display.textContent = 0
disStatus.textContent = '-'



// add event listeners for buttons
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        return btn.textContent
    })
})

// show value in display
const showValue = () => {
    
}
