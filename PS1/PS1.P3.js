let teststring = "supercalifragilisticexpialidocious";

const doString = (str, operation) => operation(str);

let expression1 = doString(teststring, str => (str.replace(/c/g,"CUTc")).split('CUT'));

let expression2 = doString(teststring, str => str.replace(/a/g,"A"));

console.log(expression1);
console.log(expression2);

const resultS = {
    originalString: teststring,
    modifiedString: expression2,
    numberReplaced: teststring.match(eval(/a/ig))?teststring.match(eval(/a/ig)).length:0,
    length:expression2.length
}
console.log(resultS)