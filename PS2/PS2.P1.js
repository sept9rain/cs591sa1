function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result
    }
}

function* fibseven(){
    let myFib = fibs();
    let result = myFib.next().value;
    while(true) {
        while (result % 2 != 0) {
            result = myFib.next().value;
        }
        yield result
        result = myFib.next().value;
    }

}
myFibseven = fibseven();
let count = 5;
while (count --> 0) {
    console.log(myFibseven.next().value)
}