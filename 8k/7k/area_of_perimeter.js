

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

function areaOrPerimeter(s1, s2){
    let result = 0;

    if (s1 !== s2){
        result = (s1 * 2) + (s2 * 2);
        return result;
    }
    else{
        result = s1 * s2;
        return result;
    }
}
