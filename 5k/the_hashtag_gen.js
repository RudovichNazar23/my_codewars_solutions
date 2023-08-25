// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.


function generateHashtag (str) {
    let hashTag = "#";
    let arr_chars = str.trim().split(" ")

    if (!str || str === " "){
        return false;
    }

    for (let word of arr_chars){
        if (!word){
            continue;
        }
        word = word.toLowerCase();
        word = word[0].toUpperCase() + word.substring(1);
        hashTag += word;
    }
    if (hashTag.length > 140 || hashTag === "#"){
        return false;
    } 
    else{
        return hashTag;
    }
}