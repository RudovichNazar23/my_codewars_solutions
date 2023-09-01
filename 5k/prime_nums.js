// You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

// isPrime(number)
// Should return boolean true if prime, otherwise false

// getPrimes(start, finish)
// Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) 
// should return all primes from 1 to 10 both inclusive.


function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false;
        }
    }
    return number > 1;
}
  
function getPrimes(start, finish) {
    let num_arr = [];
    let min = Math.min(start, finish);
    let max = Math.max(start, finish);

    for (let i = min; i <= max; i++){
        if (isPrime(i)){
            num_arr.push(i)
        }
    }
    return num_arr.sort((a, b) => a - b);
}

