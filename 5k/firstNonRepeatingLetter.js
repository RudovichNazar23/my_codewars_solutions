// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.



function firstNonRepeatingLetter(s) {
    let char_arr = s.toLowerCase().split("");
    
    for (let i = 0; i < char_arr.length; i++){
        if (char_arr.filter((item) => item === char_arr[i]).length === 1){
            return s[i];
        }
    }
    return "";
};