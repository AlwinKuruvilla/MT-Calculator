let number1 = 0;
let number2 = 0;
let operations;
let selectedOperation;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function getInput() {
    number1 = document.getElementById("first-number-box").value;
    number2 = document.getElementById("second-number-box").value;
    operations = document.getElementsByName("operation");
    for(let i=0; i<operations.length; i++) {
        if (operations[i].checked) {
            selectedOperation = operations[i].value;
        }
    }
}

function calculate() {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    switch(selectedOperation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            if (num2 === 0) {
                return 'Dividing by 0 is not allowed'
            } return divide(num1, num2);
    }
}

function run() {

    getInput();
    let answer = calculate()
    if(isNaN(answer)) {
        document.getElementById('answer').innerText = "Please enter numbers into the text box";
    } else {
        document.getElementById('answer').innerText = answer ;
    }
}

function clearForm() {
    document.getElementById("first-number-box").value = ""
    document.getElementById("second-number-box").value = "";
    document.getElementById("add").checked = true;
    document.getElementById("answer").innerText = "Cleared!";
}