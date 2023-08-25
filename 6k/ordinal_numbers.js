// Your task is to write the ordinal(number, brief) function. number will be an integer. You need to find the ordinal suffix of said number.

// brief is an optional parameter and defaults to false. When using brief notation, nd and rd use d instead. All others are the same.

// ordinal(number, brief) should return a string containing those two characters (or one character) that would be tagged onto the end of the number.

function ordinal(number, brief=false) {
    let nums = {
        "1": "st",
        "2": "nd",
        "3": "rd",
        "11": "th",
        "12": "th",
        "13": "th",
    };
    let str_numb = number.toString().slice(-2);

    if (str_numb === "1"){
        return "st";
    }

    if (nums[str_numb]){
        if (brief && str_numb.length === 1){
            return nums[str_numb][1];
        }
        else{
            return nums[str_numb];
        }
    }
    if (str_numb.length === 2 && nums[str_numb[1]]){
        if (brief){
            return nums[str_numb[1]][1];
        }
        else{
            return nums[str_numb[1]];
        }
    }
    return "th";
}