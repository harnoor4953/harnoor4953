//Functions begin 
/**
 * Add function for performing addition on two numbers 
 * @param {*} a first number
 * @param {*} b second number 
 * @returns 
 */
function add (a,b) {
    return parseFloat(a) + parseFloat(b);
}
/**
 * Sub function for performing subtraction on two numbers 
 * @param {*} a first number
 * @param {*} b second number 
 * @returns 
 */
function sub (a,b) {
    return parseFloat(b) - parseFloat(a);
}
/**
 * multiply function for performing multiplication on two numbers 
 * @param {*} a first number
 * @param {*} b second number 
 * @returns 
 */
function multiply (a,b) {
    return parseFloat(a) * parseFloat(b);
}
/**
 * divide function for performing division on two numbers 
 * @param {*} a first number
 * @param {*} b second number 
 * @returns 
 */
function divide (a,b) {
    //Checking if 0 or not for the error 
    if (a === 0) {
        return "Can't divide by 0(zero)";
    }
    return parseFloat(b) / parseFloat(a);
}
/**
 * Checks for which chosenOperation to perform 
 * by going through the four basic operations 
 * @param {*} a first number
 * @param {*} b second number 
 * @param {*} operation the function which needs to be implemented 
 * @returns 
 */
function calculate(a,b,operation){
    if (operation === 'addOp'){
        finalAnswer = add(a,b);
    }
    else if (operation === 'subtractOp'){
        finalAnswer = sub(a,b);
    }
    else if (operation === 'multiplyOp'){
        finalAnswer = multiply(a,b);
    } 
    else if (operation === 'divideOp'){
        finalAnswer = divide(a,b);
    }
    return finalAnswer;
}



//Global variables begin 
let btn = document.querySelectorAll('button');
let chosenOperation = null;
let firstNumber = '';
let secondNumber = '';
let finalAnswer = '';

//Event listeners
btn.forEach(btn => {
    btn.addEventListener('click', e => {
        //Creates all of the vars
        const keys = e.target;
        //This will look for the action which is being performed on the calculator
        const action = keys.dataset.action;
        const keyContent = keys.textContent;
        let totalScreen = document.getElementById('totalScreen');
        let topDisplay = document.getElementById('topDisplay');
        const numberDisplay = totalScreen.textContent;
        document.getElementById('totalScreen').style.cssText = "font-size:150%";
        if(keys.matches('button')) {
            if(!action) {
                if(numberDisplay == '0') {
                    totalScreen.textContent = keyContent;
                }
                else {
                    totalScreen.textContent = numberDisplay + keyContent;
                  }
            }
        }
            if (numberDisplay.length >= 9 && !action) {
                totalScreen.textContent = numberDisplay;
              }
        if(action == 'clear') {
            totalScreen.textContent = 0;
            topDisplay.textContent = 0;
            firstNumber = '';
            secondNumber = '';
            finalAnswer = '';
            chosenOperation = null;
        }
        if(action === 'del'){
            if(numberDisplay === 0){
                totalScreen.textContent = numberDisplay;
                if (x.length <= 0) {
                    totalScreen.textContent = 0;
                }
            }
            else if (totalScreen.textContent === "Can't divide by 0(zero)") {
                    totalScreen.textContent = 0;
                    firstNumber = '';
                    secondNumber = '';
            }
            else {
                let x;
                x = totalScreen.textContent.toString();
                x = x.slice(0,-1);
                totalScreen.textContent = Number(x);
                secondNumber = Number(x);
                if (x.length <= 0) {
                    totalScreen.textContent = 0;
                }
            }
        }
        if (action === 'decimal') {
            if (totalScreen.textContent.includes(".")) {
                totalScreen.textContent = numberDisplay;
            } 
            else {
            totalScreen.textContent = numberDisplay + '.';
            }
        } 
      else if (keys.id == 'addOp' || keys.id == 'subtractOp' || keys.id == 'multiplyOp' || keys.id == 'divideOp') {
            if (firstNumber === '' && chosenOperation === null) {
                chosenOperation = keys.id;
                firstNumber = parseFloat(totalScreen.textContent);
                topDisplay.textContent = `${firstNumber}`;
                totalScreen.textContent = 0;
                } 
                else if (secondNumber === '') { 
                    secondNumber = parseFloat(calculate(numberDisplay, firstNumber, chosenOperation));
                    secondNumber = parseFloat(secondNumber.toFixed(5));
                    topDisplay.textContent = `${secondNumber}`;
                    totalScreen.textContent = 0;
                    chosenOperation = keys.id;
                    }
                    else if (secondNumber === '' || secondNumber === 0 && chosenOperation === 'multiply') {
                        firstNumber = parseFloat(totalScreen.textContent);
                        topDisplay.textContent = `${firstNumber}`;
                        secondNumber = topDisplay.textContent;
                        totalScreen.textContent = 0;
                        firstNumber = '';
                    }
                    else {
                    firstNumber = parseFloat(totalScreen.textContent);
                    secondNumber = parseFloat(calculate(firstNumber, secondNumber, chosenOperation));
                    secondNumber = parseFloat(secondNumber.toFixed(5));
                    topDisplay.textContent = `${secondNumber}`;
                    totalScreen.textContent = 0;
                    chosenOperation = keys.id;
                    }
        }
        if (keys.id === 'equalsSign') {
            if (chosenOperation === null) {
                totalScreen.textContent = displayNum;
            } 
            else {
            firstNumber = parseFloat(totalScreen.textContent);
            secondNumber = parseFloat(topDisplay.textContent);
            finalAnswer = calculate(firstNumber, secondNumber, chosenOperation);
            totalScreen.textContent = `${finalAnswer}`;
            topDisplay.textContent = 0;
            firstNumber = '';
            secondNumber = `${finalAnswer}`;
            chosenOperation = null;
            if (isNaN(finalAnswer) || isNaN(secondNumber)) {
                topDisplay.textContent = "Error";
                totalScreen.textContent = 0;
                firstNumber = '';
                secondNumber = '';
            }
            if (totalScreen.textContent.length >= 10) {
                const tempNum = `${finalAnswer}`;
                const resultStr = tempNum.toString();
                finalAnswer = Number(resultStr.slice(0, 10));
                finalAnswer = parseFloat(finalAnswer.toFixed(5));
                totalScreen.textContent = `${finalAnswer}`;
                topDisplay.textContent = 0;
                firstNumber = '';
                secondNumber = `${finalAnswer}`;
                chosenOperation = null;
                document.getElementById('totalScreen').style.cssText = "font-size:165%;";
            }
        }
    }
    });
});