// Given two array of integers(arr1,arr2). 
// Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); 
// Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]



const maxAndMin = (array1, array2) => [
    Math.max(...array1.map(x => Math.max(...array2.map(y => Math.abs(x - y))))),
    Math.min(...array1.map(x => Math.min(...array2.map(y => Math.abs(x - y)))))
];
