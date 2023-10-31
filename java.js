
let firstNum = 0;
let theOperator = '';
let secondNum = 0;







function add(firstNum, secondNum) {
return firstNum + secondNum;

};

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;


};

function multiply(firstNum, secondNum) {

    return firstNum * secondNum;


};

function divide(firstNum, secondNum) {

return firstNum / secondNum;
    
    
    };
    
    



function operate(firstNum, theOperator, secondNum) {
    
if(theOperator === '+') {

return add(firstNum, secondNum)

}

else if(theOperator === '-') {

    return subtract(firstNum, secondNum)


}
else if(theOperator === '*') {

    return multiply(firstNum, secondNum)


}
else if(theOperator === '/') {

    return divide(firstNum, secondNum)


} else {

    return 'Wrong'
}



};

console.log(operate(10, '/', 10));