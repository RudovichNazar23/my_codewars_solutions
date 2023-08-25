
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.


function isPrime(num) {
    if (num <= 1){
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

