// Given an array arr that contains some integers(positive, negative or 0), and a range list such as [[start1,end1],[start2,end2],...], 
// start and end are the index of arr and start always less than end. 
// Your task is to calculate the sum value of each range (start index and end index are both inclusive), and return the maximum sum value.


function maxSum(arr,range){
    let max_sum = -Infinity;

    for (let r of range){
        let sm = arr.slice(r[0], r[1] + 1).reduce((pr, cur) => pr + cur);
        if (sm > max_sum){
            max_sum = sm;
        }
    }
    return max_sum;    
}