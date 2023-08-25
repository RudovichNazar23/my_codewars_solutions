// In this kata you'll be given a number n >= 2 and output a list with all positive integers less than gcd(n, k) == 1, with k being any of the output numbers.

// The list cannot include duplicated entries and has to be sorted.


function coprimes(n){
    let nums = [1,];
    let gcd = function(a, b){
        while (a != b){
            if (a > b){
                a -= b;
            }
            else{
                b -= a;
            }
        }
        return a;
    }

    for (let i = 2; i <= n; i++){
        if (gcd(n, i) === 1){
            nums.push(i);
        }
    }   
    return nums;
};