// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.


function array(string) {
    let arr = string.split(",");

    return arr.length <= 2 ? null : arr.slice(1, arr.length - 1).join(" ");
}