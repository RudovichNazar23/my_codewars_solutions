// In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).


function triangleType(a, b, c){
    let func = function(radians){
        const pi = Math.PI;
        return radians * (180/pi);
    }

    if (a + b <= c || b + c <= a || a + c <= b){
        return 0;
    }
    
    let a_angle = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c));
    let b_angle = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c));
    let c_angle = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));
    
    if (func(a_angle) === 90 || func(b_angle) === 90 || func(c_angle) == 90){
        return 2;
    }
    else{
        if (func(a_angle) > 90 || func(b_angle) > 90 || func(c_angle) > 90){
            return 3;
        }
        else{
            return 1;
        }
    }
}