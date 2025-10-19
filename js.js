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
            if (b == 0) {
                alert('Please no')
                break
            }
            return divide(a,b)    
    }
}

function clickFunction(button) {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent)
    })
}

function includesInput(text) {
    return String(text).length > 0 && text != '.' && text != '-' && text != '.-' && text != '-.'
}

function checkIfJustPeriod(text) {
    return text == '.'
}

function checkIfJustMinus(text) {
    return text == '-'
}

function includesOperator(text) {
    textString = String(text)
    if (textString[0] == '-') {
        return includesOperator(textString.slice(1))
    }
    return textString.includes('+') ||
    textString.includes('-') ||
    textString.includes('*') ||
    textString.includes('/')
}

function checkOperator(text) {
    textString = String(text)
    if (textString[0] == '-') {
        textString = textString.slice(1)
    }
    if (textString.includes('+')) {
        return '+'
    } else if (textString.includes('*')) {
        return '*'
    } else if (textString.includes('/')) {
        return '/'
    }  else if (textString.includes('-')) {
        return '-'
    }
}

function appendOperator(context) {
    display.textContent += context;  
}

function doMath(text) {
    if (String(text)[0] == '-'){
        if (checkOperator(String(text).slice(1)) == '-') {
            subtractNegative(text)
        } else {
            let operator = checkOperator(text)
            let splitString = String(text).split(operator)
            let a = splitString[0]
            let b = splitString[1]
            if (b != "" && b != '.' && b != '-' && b != '-.') {
                result = operate(Number(a),Number(b),operator)
                if (String(result).includes('.')) {
                    if (String(result).split('.')[1].length > 6) {
                        result = result.toFixed(6)
                    }
                }
                display.textContent = result    
            }            
        }
    } else {
        let operator = checkOperator(text)
        let splitString = String(text).split(operator)
        let a = splitString[0]
        let b = splitString[1]
        if (b != "" && b != '.' && b != '-' && b != '-.') {
            result = operate(Number(a),Number(b),operator)
            if (String(result).includes('.')) {
                if (String(result).split('.')[1].length > 6) {
                    result = result.toFixed(6)
                }
            }
            display.textContent = result    
        }            
    }

}

function subtractNegative(text) {
    text = String(text).slice(1)
    let operator = checkOperator(text)
    let splitString = text.split(operator)
    let a = -splitString[0]
    let b = splitString[1]
    if (b != "" && b != '.') {
        result = operate(Number(a),Number(b),operator)
        if (String(result).includes('.')) {
            if (String(result).split('.')[1].length > 6) {
                result = result.toFixed(6)
            }
        }
        display.textContent = result    
    }      
}

function updateDisplay(context) {
    switch(context) {
        case '+':
            if (includesInput(display.textContent)) {
                if (!includesOperator(display.textContent)) {
                    appendOperator(context)
                } else {
                    doMath(display.textContent)
                    if (!includesOperator(display.textContent)) {
                        appendOperator(context)
                    }
                }
                
            }
            break
        case '-':
            if (!checkIfJustPeriod(display.textContent) && display.textContent != '-.') {
                if ((!includesOperator(display.textContent) && 
                String(display.textContent)[0] != '-') ||
                (String(display.textContent)[0] == '-' && display.textContent != '-.' && !includesOperator(display.textContent) && String(display.textContent).length > 1) ||
                String(display.textContent).slice(-1) == '+' ||
                String(display.textContent).slice(-1) == '*' ||
                String(display.textContent).slice(-1) == '/')
                {
                    appendOperator(context)
                } else {
                    doMath(display.textContent)
                    if (!includesOperator(display.textContent)) {
                        appendOperator(context)
                    }
                }
            }
            break
        case '*':
            if (includesInput(display.textContent)) {
                if (!includesOperator(display.textContent)) {
                    appendOperator(context)
                } else {
                    doMath(display.textContent)
                    if (!includesOperator(display.textContent)) {
                        appendOperator(context)
                    }
                }
            }
            break
        case '/':
            if (includesInput(display.textContent)) {
                if (!includesOperator(display.textContent)) {
                    appendOperator(context)
                } else {
                    doMath(display.textContent)
                    if (!includesOperator(display.textContent)) {
                        appendOperator(context)
                    }
                }
            }
            break
        case '=':
            if (includesOperator(display.textContent)) {
                doMath(display.textContent)
            }
            break
        case '.':
            if (includesInput(display.textContent)) {
                if (includesOperator(display.textContent)) {
                    let splitString = String(display.textContent)
                    .split(checkOperator(display.textContent))
                    if (!splitString[1].includes('.')) {
                        display.textContent += context;
                    }
                } else {
                    if (!String(display.textContent).includes('.')) {
                        display.textContent += context;
                    }
                }
            } else if (!checkIfJustPeriod(display.textContent)) {
                display.textContent += context;
            }
            break
        case '⌫':
            if (includesInput(display.textContent) || 
            checkIfJustPeriod(display.textContent) ||
            checkIfJustMinus(display.textContent) ||
            display.textContent == '-.') {
                display.textContent = String(display.textContent).slice(0, -1)
            }
            break
        case 'C':
            display.textContent = "";
            break
        default:
            display.textContent += context;
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
            button.style.cssText = 'background-color: lightcoral'
            numbers.append(button)
            clickFunction(button)      
            break;
        case 1:
            button.className = 'button'
            button.textContent = "C"
            button.style.cssText = 'background-color: lightcoral'
            numbers.append(button)
            clickFunction(button)      
            break;      
        case 2:
            button.style.cssText = 'background-color: lightcoral'
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



