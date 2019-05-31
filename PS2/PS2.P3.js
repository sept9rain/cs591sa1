function* cubes (xs) {
    for (x of xs) {
        result = x * x * x;
        yield result
    }
}
let testArray = [1,2,3,4,5,6,7];
for (cube of cubes(testArray)){
    console.log(cube);
}