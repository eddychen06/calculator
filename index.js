class Calculator {
    constructor (number, operation) 
}

function addToInput(n) {
    input = document.getElementById("input-field").value
    document.getElementById("input-field").value = input + n
}

function calculate() {
    input = document.getElementById("input-field").value
    result = eval(input)
    document.getElementById("input-field").value = result
}