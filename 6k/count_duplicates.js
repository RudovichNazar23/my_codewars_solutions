// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let lower_text = text.toLowerCase();
    let repeat_letters = [];

    if (!text){
        return 0;
    }
    else{
        for(let i = 0; i < lower_text.length; i++){
            let l1 = lower_text[i];
            for (let j = i + 1; j < lower_text.length; j++){
                let l2 = lower_text[j];
                if (l1 === l2){
                    if (!repeat_letters.includes(l1)){
                        repeat_letters.push(l1)
                    }
                }
            }
        }
        return repeat_letters.length;
    }

  }