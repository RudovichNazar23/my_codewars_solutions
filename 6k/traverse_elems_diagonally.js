// In this kata you're given an n x n array and you're expected to traverse the elements diagonally from the bottom right to the top left.


function diagonal(arr) {
    let result = [];

    let max_size = arr[0].length;
    
    let v = [];
                                  
    for(let i = 0; i < 2 * max_size - 1; i++)
    {
        v.push([]);
    }
    
    for(let i = 0; i < arr[0].length; i++)
    {
        for(let j = 0; j < arr[0].length; j++)
        {
            v[i + j].push(arr[i][j]);
        }
    }
    
    for(let i = 0; i < v.length; i++)
    {
         
        for(let j = v[i].length - 1;
                j >= 0; j--)
        {
            result.push(v[i][j]);
        }
    }
    return result.reverse();
}
