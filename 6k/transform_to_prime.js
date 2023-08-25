
// Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .


function minimumNumber(numbers){
    let list_sum = numbers.reduce((pr, cr) => pr + cr)

    let is_prime_number = (n) => {
        if (n < 2) {
            return false;
          }
          for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
              return false;
            }
          }
          return true;
        }
    
    if (is_prime_number(list_sum)){
        return 0;
    }

    let nextPrime = list_sum;
    while (true) {
        nextPrime++;
        if (is_prime_number(nextPrime)) {
        return nextPrime - list_sum;
        }
    }
}