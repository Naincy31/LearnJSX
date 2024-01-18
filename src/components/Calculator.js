function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    if(num1 > num2){
        return num1 - num2;
    }
    return num2 - num1;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return (num1/num2).toFixed(2);
}

export {add, subtract, multiply, divide}