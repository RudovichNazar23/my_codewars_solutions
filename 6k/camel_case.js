// Write a method (or function, depending on the language) that converts a string to camelCase, 
// that is, all words must have their first letter capitalized and spaces must be removed.


String.prototype.camelCase = function() {
    let result = "";

    if (this.trim() === "") {
        return result;
    } else {
        let arr = this.split(" ");

        for (let word of arr) {
            if (word !== "") {
                result += word[0].toUpperCase() + word.slice(1);
            }
        }
        return result;
    }
};