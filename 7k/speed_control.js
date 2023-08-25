// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. 
// If x length is less than or equal to 1 return 0 since the car didn't move.

function gps(s, x) {
    let arr = [];
    let res = 0;

    for (let i = 0; i < x.length - 1; i++){
        let delta = x[i + 1] - x[i]
        let total = (3600 * delta) / s;
        arr.push(total);
    }
    
    for (const x of arr){
        if (x > res){
            res = x;
        }
    }
    return res;
}