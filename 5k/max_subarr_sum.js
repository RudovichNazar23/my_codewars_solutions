// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]


function maxSequence(arr){
    let max = 0;

    for (let i = 1; i < arr.length; i++){
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
        max = Math.max(max, arr[i]);
    }
    return max;
};