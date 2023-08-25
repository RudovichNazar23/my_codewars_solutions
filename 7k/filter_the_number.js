// Oh, no! The number has been mixed up with the text. 
// Your goal is to retrieve the number from the text, can you return the number back to its original state?


function filterString(value){
    let res = "";

    for (let char of value){
        if (char >= 0){
            res += char;
        }
    }
    return Number(res);
}
