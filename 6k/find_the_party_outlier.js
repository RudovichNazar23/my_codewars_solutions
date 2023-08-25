
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers){
    let even_numbers = [], odd_numbers = [];

    integers.forEach(
        (item) => {
            if (item % 2 === 0){
                even_numbers.push(item);
            }
            else{
                odd_numbers.push(item);
            }
        }
    );
    if (even_numbers.length === 1){
        return even_numbers[0];
    }
    else{
        return odd_numbers[0];
    }
}
