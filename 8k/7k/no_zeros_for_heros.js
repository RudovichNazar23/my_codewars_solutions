// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones

function noBoringZeros(n){
    let str_n = n.toString();
    let result = 0;

    if (!str_n.endsWith("0") || (str_n.length === 1 && str_n.endsWith("0"))){
        return n;
    }
    else{
        result += n / 10;
        return noBoringZeros(result);
    }
}