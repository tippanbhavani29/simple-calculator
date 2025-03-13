var result = 0;
var curr = "";  
var prev = 0;
var operator = "";

const numbers = Array.from(document.getElementsByClassName('num'));
const operands = Array.from(document.getElementsByClassName('op'));
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const resultTextArea = document.querySelector('.result');
 
numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        var nu = e.target.innerText;
        curr += nu;  
        updatetext(curr);
    });
});

// Add event listeners for operator buttons
operands.forEach(button => {
    button.addEventListener('click', (e) => {
        var oper = e.target.innerText;
        if (curr !== "") {
            prev = parseFloat(curr); // Convert curr to a number
            curr = "";  
        }
        operator = oper; // Store the operator
    });
});

// Add event listener for equals button
equalButton.addEventListener('click', () => {
    if (curr !== "") {
        var currNum = parseFloat(curr); // Convert curr to a number
        calculate(operator, currNum);
        curr = ""; // Clear curr after calculation
    }
});

// Add event listener for clear button
clearButton.addEventListener('click', () => {
    result = 0;
    curr = "";
    prev = 0;
    operator = "";
    updatetext(0);
});

function calculate(opern, currNum) {
    switch (opern) {
        case '+':
            result = prev + currNum;
            updatetext(result);
             prev = result;
            break;
        case '-':
            result = prev - currNum;
            break;
        case 'x':
            result = prev * currNum;
            break;
        case '/':
            result = prev / currNum;
            break;
        default:
            break;
    }
    updatetext(result);
    prev = result;  
}
function updatetext(re) {
    resultTextArea.value = re; // Update the textarea value
}