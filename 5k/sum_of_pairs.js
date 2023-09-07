// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.


// function sumPairs(ints, s) {
//     let pairs = [];
//     let ind = Infinity;
//     let result = [];

//     for (let i = 1; i < ints.length; i++){
//         let arr = ints.slice(i);

//         for (let j = 0; j < arr.length; j++){
//             if (ints[i - 1] + arr[j] == s){
//                 pairs.push([j, ints[i - 1], arr[j]]);
//             }
//         }
//     }

//     for (let pair of pairs){
//         if (pair[0] < ind){
//             ind = pair[0];
//             result = pair.slice(1);
//         }
//     }
//     return result.length === 0 ? undefined : result;
// } works slowly at final tests, but passes base test easily.


function sumPairs(ints, s){
    let cache = new Set();

    for (let i = 0; i < ints.length; i++){
        let diff = s - ints[i];
        if (cache.has(diff)){
            return [diff, ints[i]]
        }
        else{ cache.add(ints[i])}
    }
}

