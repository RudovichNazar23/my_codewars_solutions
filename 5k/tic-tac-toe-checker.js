'use strict';

function isSolved(board) {
    let result = -1;

    for (let i = 0; i < board.length; i++){
        let x = board[i].filter((value) => value === 1);
        let o = board[i].filter((value) => value === 2);

        if (x.length === 3){
            return 1;
        }
        else{
            if (o.length === 3){
                return 2;
            }
            else{ continue; }
        }
    }

    for (let i = 0; i < board.length; i++){
        if ([1, 2].includes(check_values(getVertical(board, i)))){
            result = check_values(getVertical(board, i));
            return result;
        }
    }

    let d1 = [];
    let d2 = [];

    for (let i = 0; i < board.length; i++){
        d1.push(board[i][i]);
    }
    for (let i = 0; i < board.length; i++){
        d2.push(board[i].reverse()[i]);
    }

    if ([1, 2].includes(check_values(d1))){
        result = check_values(d1);
        return result;
    }
    else{
        result = check_values(d2);
        return result;
    }
}

console.log(isSolved(
    [[2, 2, 1],
    [0, 2, 2],
    [2, 1, 2]]
    )
);

function check_values(array){
    let x = array.filter((item) => item === 1);
    let o =  array.filter((item) => item === 2);
    
    if (x.length === 3){
        return 1;
    }
    else{
        if (o.length === 3){
            return 2;
        }
        else{ return -1; }
    }
}

function getVertical(arr, ind){
    let ar = [];
    arr.forEach((item) => ar.push(item[ind]));
    return ar
}




function isSolved(board) {
    if(checkBoard(1, board)) {
      return 1;
    } else if(checkBoard(2, board)) {
      return 2;
    } else if(JSON.stringify(board).includes("0")) {
      return -1;
    } else {
      return 0;
    }
    
    function checkBoard(value, board) {
      if(
        (board[0][0] === value && board[0][1] === value && board[0][2] === value) ||
        (board[1][0] === value && board[1][1] === value && board[1][2] === value) ||
        (board[2][0] === value && board[2][1] === value && board[2][2] === value) ||
        (board[0][0] === value && board[1][0] === value && board[2][0] === value) ||
        (board[0][1] === value && board[1][1] === value && board[2][1] === value) ||
        (board[0][2] === value && board[1][2] === value && board[2][2] === value) ||
        (board[0][0] === value && board[1][1] === value && board[2][2] === value) ||
        (board[0][2] === value && board[1][1] === value && board[2][0] === value)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }