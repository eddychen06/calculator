class Calculator {
    constructor (previous, current) {
        this.previous = previous
        this.current = current
        this.operation = ''
        this.result = ''
    }

    addNumber(number) {

        this.current += number
        document.querySelector("#current").innerHTML = this.current
    }

    addOperation(operation) {
        this.previous = this.current
        document.querySelector("#previous").innerHTML = this.previous
        document.querySelector("#current").innerHTML = ""
        this.current = ""
        this.operation = operation
    }

    compute() {
        switch (this.operation) {
            case "×":
                this.result = parseFloat(this.previous) * parseFloat(this.current)
                break
            case "÷":
                this.result = parseFloat(this.previous) / parseFloat(this.current)
                break
            case "+":
                this.result = parseFloat(this.previous) + parseFloat(this.current)
                break
            case "−":
                this.result = parseFloat(this.previous) - parseFloat(this.current)
                break
        }

        document.querySelector("#previous").innerHTML = ""
        document.querySelector("#current").innerHTML = this.result

        document.querySelector(`#${this.operation}`).style.background = "#FF9F0A"
        document.querySelector(`#${this.operation}`).style.color = "white"


        this.current = this.result
    }
}


const numberBtns = document.querySelectorAll(".number-btn")
const operationBtns = document.querySelectorAll(".operation-btn")
const equalBtn = document.querySelector(".equal-btn")

const previous = document.querySelector("#previous").innerHTML
const current = document.querySelector("#current").innerHTML


const calculator = new Calculator(previous, current)

numberBtns.forEach(button => {
    button.addEventListener("click", function () {
        calculator.addNumber(button.innerHTML)
    })
})

operationBtns.forEach(button => {
    button.addEventListener("click", function () {
        calculator.addOperation(button.innerHTML)
        button.style.background = "white"
        button.style.color = "#FF9F0A"
    })
})

equalBtn.addEventListener("click", function () {
    calculator.compute()
})