
const equalBtn = document.getElementById('equal')
const display = document.getElementById('input');
const numButton = document.querySelectorAll('#numbers');
const operateButton = document.querySelectorAll('#operator')
const clearBtn = document.getElementById('clear');
const previousNumBtn =  document.getElementById('second');


let  previousNum = '';
let theOperator = '';
let currentNum = '';




   numButton.forEach(button => button.addEventListener('click', () =>  {
currentNum = button.textContent 

display.textContent += currentNum

}))




  operateButton.forEach(button => button.addEventListener('click', () => {

theOperator = button.textContent;
previousNum = display.textContent

previousNumBtn.textContent +=  previousNum + theOperator ;

display.textContent = ''

}))

 



function add(currentNum, previousNum) {
return currentNum + previousNum;

};

function subtract(currentNum, previousNum) {
  return  currentNum - previousNum


};

function multiply(currentNum, previousNum) {

    return currentNum * previousNum;


};

function divide(currentNum, previousNum) {

return currentNum / previousNum;
    
    
    };
    
    




function operate(currentNum,theOperator, previousNum) {
    
if(theOperator === '+') {

return add(currentNum, previousNum)

}

else if(theOperator === '-') {

    return subtract(currentNum, previousNum)


}
else if(theOperator === '*') {

    return multiply(currentNum, previousNum)


}
else if(theOperator === '/') {

    return divide(currentNum, previousNum)


} else {

    return 'Wrong'
}

};


clearBtn.addEventListener('click', () => {

display.textContent = ''
previousNumBtn.textContent = ''
});


equalBtn.addEventListener('click', () => {

display.textContent = operate(display.textContent,theOperator, previousNum)

})
    






