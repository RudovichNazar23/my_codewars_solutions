
// Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.




function whoTookTheCarKey(message) {
    let binString = '';

    for (let str of message){
        str.split(' ').map(function(bin) {
            binString += String.fromCharCode(parseInt(bin, 2));
          });
    }
    return binString;
}