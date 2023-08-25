

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n){
    let rem_array = [];
    let num = "";
    let res = 0;
    
    while (n > 0){
      let rem = n % 2;
      rem_array.push(rem);
      n = Math.floor(n / 2);
    }
    while (rem_array.length > 0) {
      num += String(rem_array.pop());
    }

    for (let i of num){
        if (i === "1")
        res += 1;
    }
    return res;
}
