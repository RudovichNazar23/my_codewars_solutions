
// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.


function groupByCommas(n) {
    let str_num = n.toString()
    let chars = Array.from(str_num);
    let result_array = [];
    let res = "";
    let counter = 0

    if (str_num.length <= 3){
        return str_num;
    }

    while (chars.length > 0){
        if (counter === 3){
            result_array.unshift(",");
            counter -= 3;
        }
        else{
            result_array.unshift(chars.pop());
            counter += 1;
        }
    }
    result_array.forEach(
        (item) => {
            res += item;
        }
    )
    return res;
}

