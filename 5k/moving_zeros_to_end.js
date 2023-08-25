// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


function moveZeros(arr) {
    let no_zeros = arr.filter((item) => item !== 0);
    let zeros = arr.filter((item) => item === 0);
    return no_zeros.concat(zeros);
}