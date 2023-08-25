// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    let res = [];

    if (a.length == 0){
        return [];
    }
    else {
        if (b.length == 0){
            return a;
        }
        else{
            for (let i = 0; i <= b.length - 1; i++){
                let b_elem = b[i];
        
                for (let x = 0; x <= a.length - 1; x++){
                    let a_elem = a[x];
                    if (b_elem === a_elem){
                        delete a[x];
                    }
                }
            }
            for (let x of a){
                if (typeof(x) == "number"){
                    res.push(x)
                }
            }
            return res;
        }
    }
}
