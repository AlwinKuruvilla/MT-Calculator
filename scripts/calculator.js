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

function checkForZero(num) {
    if(num === 0) {
        return true;
    } else return false;
}

function getInput() {
    let number1 = document.getElementById("first-number").value;
    let number2 = document.getElementById("second-number").value;
    let operation = document.getElementsByName("operation").checked.value;
}

function calculate() {
    getInput();
    switch(opeation) {
        case 'add':
            return add(number1, number2);
        case 'subtract':
            return subtract(number1, number2);
        case 'multiply':
            return multiply(number1, number2);
        case 'divide':
            if (number2 === 0") {
            return 'Dividing by 0 is not allowed'
    }
    return divide(number1, number2);
}
}

// <p id="demo">Click the button to replace this document with new content.</p>

// <button onclick="myFunction()">Try it</button>

// <script>
// function myFunction() {
//   document.open("text/html","replace");
//   document.write("<h2>Learning about the HTML DOM is fun!</h2>");
//   document.close();
// }
// </script>