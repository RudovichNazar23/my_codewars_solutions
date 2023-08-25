

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
    let result = [];

    for (let i = 0; i < array1.length; i++){
        let ar1_elem = array1[i];
        for (let j = 0; j < array2.length; j++){
            let ar2_elem = array2[j];

            if (ar2_elem.includes(ar1_elem) && !result.includes(ar1_elem)){
                result.push(ar1_elem);
            }
        }
    }
    return result.sort();
}
