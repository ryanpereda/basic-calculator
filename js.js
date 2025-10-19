function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
    //remember / 0
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '*':
            return multiply(a,b)
        case '/':
            return divide(a,b)    
    }
}

function clickFunction(button) {
    button.addEventListener('click', () => {
        doMath(button.textContent)
    })
}

function doMath(context) {
    switch(context) {
        default:
            console.log(context)
            display.textContent += context;
            console.log(display.textContent)
    }
}

let display = document.querySelector(".display")
let buttons = document.querySelector(".buttons")
let numbers = document.querySelector(".numbers")
let operators = document.querySelector(".operators")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let times = document.querySelector(".times")
let divided = document.querySelector(".divided")
let equals = document.querySelector(".equals")
clickFunction(plus)
clickFunction(minus)
clickFunction(times)
clickFunction(divided)
clickFunction(equals)

for (let i = 0; i < 3; i++) {
    let button = document.createElement('div')
    switch (i){
        case 0:
            button.className = 'button'
            button.textContent = "⌫"
            numbers.append(button)
            clickFunction(button)      
            break;
        case 1:
            button.className = 'button'
            button.textContent = "C"
            numbers.append(button)
            clickFunction(button)      
            break;      
        case 2:
            numbers.append(button)
            break              
    }
}

for (let i = 2; i >= 0; i--) {
    for (let j = 1; j <= 3; j++) {
        let button = document.createElement('div')
        button.className = 'button'
        button.textContent = i * 3 + j
        numbers.append(button)
        clickFunction(button)
    }
    
}

for (let i = 0; i < 3; i++) {
    let button = document.createElement('div')
    switch (i){
        case 0:
            numbers.append(button)
            break
        case 1:
            button.className = 'button'
            button.textContent = 0
            numbers.append(button)
            clickFunction(button)      
            break;      
        case 2:
            button.className = 'button'
            button.textContent = "."
            numbers.append(button)   
            clickFunction(button)   
            break;                 
    }
}



