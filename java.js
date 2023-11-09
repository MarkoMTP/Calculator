
let operator="";
let previousValue="";
let currentValue="";



let equal = document.getElementById('equal')
let currentDisplay = document.getElementById('input');
let numbers = document.querySelectorAll('#numbers');
let operators = document.querySelectorAll('#operator')
let clear = document.getElementById('clear');
let previousDisplay =  document.getElementById('second');


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        handleNumber(event.target.textContent);
        currentDisplay.textContent = currentValue;
    });
});

operators.forEach((op) => {
    op.addEventListener("click", (event) => {
        handleOperator(event.target.textContent);
        previousDisplay.textContent = previousValue + " " + operator;
        currentDisplay.textContent = currentValue;
    });
});

clear.addEventListener("click", () => {
    operator = "";
    previousValue = "";
    currentValue = "";
    previousDisplay.textContent = previousValue;
    currentDisplay.textContent = currentValue;
});



equal.addEventListener("click", () => {
    let ans = calculate();

    if (ans.toString().length>=10){
        ans = ans.toFixed(3);
    }

    previousDisplay.textContent = previousValue + " " + operator + " " + currentValue;
    currentDisplay.textContent = ans.toString();
    currentValue = currentDisplay.textContent;
    operator = "";
    previousValue = "";

});



function handleNumber(button) {
if (currentValue.length>=5){return;}
currentValue += button; 
}

function handleOperator(button) {
operator = button;
previousValue = currentValue;
currentValue = ""
}

function calculate() {
let num1 = Number(previousValue);
let num2 = Number(currentValue);
let ans;

switch (operator) {
    case "/":
        ans = num1/num2; 
        break;
    case "x":
        ans = num1*num2;
        break;
    case "+":
        ans = num1+num2;
        break;
    case "-":
        ans = num1-num2;
        break;
    default:
        alert("please enter valid value and operator"); 
        break;
}
return ans;
}