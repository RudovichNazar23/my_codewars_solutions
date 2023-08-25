// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// a string with size 6 should return :'101010'.


function stringy(size) {
    let res = "1";
    
    for (let i = 1; i < size; i++){
        if (res[i - 1] === "1"){
            res += "0";
        }
        else{
            res += "1";
        }
    }
    return res;
}
