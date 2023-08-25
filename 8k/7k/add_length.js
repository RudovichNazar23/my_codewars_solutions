// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .


function addLength(str) {
    let splitted_str = str.split(" ");
    let res_ar = [];

    for (let word of splitted_str){
        res_ar.push(
            word.concat(" ", `${word.length}`)
        )
    }
    return res_ar;
}
