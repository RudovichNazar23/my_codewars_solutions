// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
    let new_str = "";
    for (let char of str){
        new_str += char.repeat(2);
    }
    return new_str;
}