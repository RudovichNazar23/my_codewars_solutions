// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. 
// Lowercase characters can be numbers. 
// If the method gets a number as input, it should return a string.


function toUnderscore(string) {
    if (typeof string === "number"){
        return string.toString();
    }

    let new_str = "";
    let chars_arr = string.split("");

    for (let i = 0; i < chars_arr.length; i++){
        if (chars_arr[i] === chars_arr[i].toUpperCase() && !"0123456789".includes(chars_arr[i])){
            if (!new_str){
                new_str += chars_arr[i].toLowerCase();
            }
            else{
                new_str += "_" + chars_arr[i].toLowerCase();
            }
        }
        else{
            new_str += chars_arr[i];
        }
    }
    return new_str;
}
