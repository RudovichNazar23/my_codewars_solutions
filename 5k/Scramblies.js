// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.


function scramble(str1, str2) {
    let chars = 0;
    let str1_arr = str1.split("");

    for (let char of str2){
        if (str1_arr.includes(char)){
            chars++;
            delete str1_arr[str1_arr.indexOf(char)];
        }
        else{
            return false;
        }
    }
    return chars === str2.length;
}

// second

function scramble(str1, str2) {
    str1 = str1.split("");
    str2 = str2.split("");
    let count = 0;
    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < str2.length; i++){
        if (obj2[str2[i]] === undefined){
          obj2[str2[i]] = 1;
        }else{
          obj2[str2[i]] += 1;
        }
    }
  
    for (let i = 0; i < str1.length; i++){
        if (obj1[str1[i]] === undefined){
          obj1[str1[i]] = 1;
        }else{
          obj1[str1[i]] += 1;
        }
    }
    
    for (const key in obj2){
      if (obj1[key] >= obj2[key]){
        count += obj2[key];
      }
    }
    return count === str2.length;
}