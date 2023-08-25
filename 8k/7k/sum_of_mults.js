// Find the sum of all multiples of n below m
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n,m){
    let arr = [];

    if (m < n || m === n){
        return "INVALID";
    }

    for (let i = n; i < m; i += n){
        arr.push(i);
    }
    return arr.reduce((prev, curr) => prev + curr);
}