// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.





function processData(data){
    let new_arr = [];

    for (let i = 0; i < data.length; i++){
        new_arr.push(data[i].reduce((prev, curr) => prev - curr));
    }
    return new_arr.reduce((prev, curr) => prev * curr);
}