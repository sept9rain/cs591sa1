let testString = "All I know is something like a bird within her sang";
function* words(strs){
    result = "";
    for (str of strs){
        if(str!=" ")
            result = result+str;
        else{
            yield result
            result = "";
        }
    }
    yield result
}
for (word of words(testString)){
    console.log(word);
}

