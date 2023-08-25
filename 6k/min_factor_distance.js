
// Write a function that returns the smallest distance between two factors of a number. 
// The input will always be a number greater than one.


function minDistance(n){
    let factors = [1,];
    let counter = 0;
    let result = Infinity;

    let find_factors = function(num){
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                factors.push(i);
            }
        }
        factors.push(n);
        return factors;
    }
    find_factors(n);

    while(counter < factors.length){
        let current  = factors[counter]
        let next = factors[counter + 1]

        if (result > next - current){
            result = next - current;
        }
        counter += 1;
    }
    return result;
}

