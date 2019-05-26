const getOperation = function(expre) {
     let operator = expre.substring(1,2);
     switch (operator) {
         case '+':
             return (left, right) => left + right;
             break;
         case '-':
             return (left, right) => left - right;
             break;
         case '*':
             return (left, right) => left * right;
             break;
         case '/':
             return (left, right) => left / right;
             break;
         case '%':
             return (left, right) => left % right;
             break;
     }
}
const printResult = function(expre){
    let result = getOperation(expre);
    let left = Number(expre.substring(0,1));
    let right = Number(expre.substring(2,3));
    console.log(`${expre} = ${result(left,right)}`);
}
const expression1 = '4+2';
const expression2 = '5*7';
const expression3 = '6-1';
const expression4 = '9/2';
printResult(expression1);
printResult(expression2);
printResult(expression3);
printResult(expression4);


