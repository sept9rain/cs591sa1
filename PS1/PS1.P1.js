let teststring = "supercalifragilisticexpialidocious"

const sortLetter = str =>
[...str]
    .sort((a, b) => a.localeCompare(b))
    .join('');

let result = sortLetter(teststring)

console.log(result);