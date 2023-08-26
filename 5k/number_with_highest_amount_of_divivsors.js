// An array of different positive integers is given. 
// We should create a code that gives us the number (or the numbers) that has (or have) the highest number of divisors among other data.
// [(1), (2), (3)]

// (1) - Total amount of numbers received
// (2) - Total prime numbers received
// (3) - a list [(a), (b)]
//       (a)- The highest amount of divisors that a certain number (or numbers) of the given  
//            array have
//       (b)- A sorted list with the numbers that have the largest amount of divisors. The list may  
//            have only one number


function procArrInt(listNum) {
    let result = [listNum.length,];
    let prime_numbers = 0;
    let max_divisors = 3;
    let nums = [];

    for (let i = 0; i < listNum.length; i++){
        if (isPrime(listNum[i])){
            prime_numbers++;
        }
        else{
            let num_divisors = countDivisors(listNum[i]);
            max_divisors = Math.max(max_divisors, num_divisors);
            if (max_divisors === num_divisors){
                nums.push(listNum[i]);
                nums = nums.filter((item) => countDivisors(item) === max_divisors);
            }
        }
    }
    result.push(prime_numbers);
    result.push([max_divisors, nums.sort((a, b) => a - b)])
    return result;
}


function isPrime(num){
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return num > 1;
}

function countDivisors(num){
    let divisors = 0;

    for (let i = 1; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            if (Math.floor(num / i) === i){
                divisors++;
            }
            else{
                divisors += 2;
            }
        }
    }
    return divisors;
}