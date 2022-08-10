let currentTotal = 0;
//const num1 = parseFloat(prompt('Enter first number: '));
//const num2 = parseFloat(prompt('Enter second number: '));
//const operator = prompt('Enter operator: ');

function add(num1, num2) {
currentTotal = num1 + num2  
}

function subtract(num1, num2) {
    currentTotal = num1 - num2  
}

function multiply(num1, num2) {
    currentTotal = num1 * num2  
 }

 function divide(num1, num2) {
    currentTotal = num1 / num2  
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            add(num1, num2)
            console.log(`${num1} + ${num2} = ${currentTotal}`);
            break;
        case '-':
            subtract(num1, num2)
            console.log(`${num1} - ${num2} = ${currentTotal}`);
            break;
        case '*':
             multiply(num1, num2)
            console.log(`${num1} * ${num2} = ${currentTotal}`);
            break;
        case '/':
            divide(num1, num2)
            console.log(`${num1} / ${num2} = ${currentTotal}`);
            break;

        }
}

operate(num1, num2, operator);
console.log(currentTotal)


const screen1 = document.getElementsByClassName('.current-operation');
screen1.textContent("Hello");

