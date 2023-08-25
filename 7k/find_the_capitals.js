
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word){
    let res = [];

    for (let i of word){
        if (i === i.toUpperCase()){
            res.push(word.indexOf(i));
        }
    }
    return res;
}
