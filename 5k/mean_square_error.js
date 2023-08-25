// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.


function solution(firstArray, secondArray) {
    let new_arr = [];

    for (let i = 0; i < firstArray.length; i++){
        new_arr.push(
            Math.abs((firstArray[i] - secondArray[i]) ** 2)
        );
    }
    return (new_arr.reduce((prev, curr) => prev + curr)) / firstArray.length;
}