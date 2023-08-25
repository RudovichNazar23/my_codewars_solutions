

// Check if a given input is a valid triangle number. 
// Return true if it is, false if it is not (note that any non-integers, including non-number types, are not triangle numbers).

//  1
//  2 3
//  4 5 6

function isTriangleNumber(number) {
    let counter = 2;
    let num = 1;
    let result = true;

    if (typeof number !== "number"){
        return false;
    }

    while (result){
        if (num === number || number  === 0){
            break;
        }
        else{
            num += counter;
            if (num > number){
                result = false;
            }
            else{
                counter += 1;
            }
        }
    }
    return result;
}
