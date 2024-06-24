function rookValidMoves(piecePos, color) {
  //return array of rooks valid move

 
  validMoves = [];
  var col = piecePos[0];
  var row = piecePos[1];


  //up
  while (parseInt(row) > 1) {
    row = parseInt(row) - 1;
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  //down
  col = piecePos[0];
  row = piecePos[1];
  while (parseInt(row) < 8) {
    row = parseInt(row) + 1;
    var move = col + row;

    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  //left
  var col = piecePos[0];
  var row = piecePos[1];
  while (String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
    col = String.fromCharCode(col.charCodeAt(0) - 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  //right
  var col = piecePos[0];
  var row = piecePos[1];
  while (String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
    col = String.fromCharCode(col.charCodeAt(0) + 1);
    var move = col + row;
  
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  return validMoves;
}





function bishopValidMoves(piecePos, color) {

   validMoves = [];
  var col = piecePos[0];
  var row = piecePos[1];

  // up-left
  while (
    parseInt(row) > 1 &&
    String.fromCharCode(col.charCodeAt(0) - 1) >= "A"
  ) {
    row = parseInt(row) - 1;
    col = String.fromCharCode(col.charCodeAt(0) - 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // up-right
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) > 1 &&
    String.fromCharCode(col.charCodeAt(0) + 1) <= "H"
  ) {
    row = parseInt(row) - 1;
    col = String.fromCharCode(col.charCodeAt(0) + 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // down-left
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) < 8 &&
    String.fromCharCode(col.charCodeAt(0) - 1) >= "A"
  ) {
    row = parseInt(row) + 1;
    col = String.fromCharCode(col.charCodeAt(0) - 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // down-right
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) < 8 &&
    String.fromCharCode(col.charCodeAt(0) + 1) <= "H"
  ) {
    row = parseInt(row) + 1;
    col = String.fromCharCode(col.charCodeAt(0) + 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  return validMoves;
}





function knightValidMoves(piecePos, color) {
  validMoves = [];
  var col = piecePos[0];
  var row = piecePos[1];
  // Up-Left
  if (parseInt(row) > 2 && String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
    var move = String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) - 2);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }

  }
  // Up-Right
  if (parseInt(row) > 2 && String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
    var move = String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) - 2);
     if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }
  // Right-Up
  if (parseInt(row) > 1 && String.fromCharCode(col.charCodeAt(0) + 2) <= "H") {
    var move = String.fromCharCode(col.charCodeAt(0) + 2) + (parseInt(row) - 1);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }
  // Right-Down
  if (parseInt(row) < 8 && String.fromCharCode(col.charCodeAt(0) + 2) <= "H") {
    var move = String.fromCharCode(col.charCodeAt(0) + 2) + (parseInt(row) + 1);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }
  // Down-Right
  if (parseInt(row) < 7 && String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
    var move = String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) + 2);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }
  // Down-Left
  if (parseInt(row) < 7 && String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
    var move = String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) + 2);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }
  // Left-Down
  if (parseInt(row) < 8 && String.fromCharCode(col.charCodeAt(0) - 2) >= "A") {
    var move = String.fromCharCode(col.charCodeAt(0) - 2) + (parseInt(row) + 1);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }
  // Left-Up
  if (parseInt(row) > 1 && String.fromCharCode(col.charCodeAt(0) - 2) >= "A") {
    var move = String.fromCharCode(col.charCodeAt(0) - 2) + (parseInt(row) - 1);
    if (checkForPieces(move, color) == "empty") {
      validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
      attackables.push(move);validMoves.push(move)
    }
  }

  return validMoves;
}




function queenValidMoves(piecePos, color) {
  // Up
  validMoves = [];
  col = piecePos[0];
  row = piecePos[1];
  while (parseInt(row) > 1) {
    row = parseInt(row) - 1;
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Down
  col = piecePos[0];
  row = piecePos[1];
  while (parseInt(row) < 8) {
    row = parseInt(row) + 1;
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Left
  var col = piecePos[0];
  var row = piecePos[1];
  while (String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
    col = String.fromCharCode(col.charCodeAt(0) - 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Right
  var col = piecePos[0];
  var row = piecePos[1];
  while (String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
    col = String.fromCharCode(col.charCodeAt(0) + 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Up-Left
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) > 1 &&
    String.fromCharCode(col.charCodeAt(0) - 1) >= "A"
  ) {
    row = parseInt(row) - 1;
    col = String.fromCharCode(col.charCodeAt(0) - 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Up-Right
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) > 1 &&
    String.fromCharCode(col.charCodeAt(0) + 1) <= "H"
  ) {
    row = parseInt(row) - 1;
    col = String.fromCharCode(col.charCodeAt(0) + 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Down-Left
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) < 8 &&
    String.fromCharCode(col.charCodeAt(0) - 1) >= "A"
  ) {
    row = parseInt(row) + 1;
    col = String.fromCharCode(col.charCodeAt(0) - 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  // Down-Right
  col = piecePos[0];
  row = piecePos[1];
  while (
    parseInt(row) < 8 &&
    String.fromCharCode(col.charCodeAt(0) + 1) <= "H"
  ) {
    row = parseInt(row) + 1;
    col = String.fromCharCode(col.charCodeAt(0) + 1);
    var move = col + row;
    if (checkForPieces(move, color) == color) break;
    else if (checkForPieces(move, color) == "empty") validMoves.push(move);
    else {
      attackables.push(move);validMoves.push(move)
      break;
    }
  }

  return validMoves;
}




function kingValidMoves(piecePos,color) {
    // King can move one step in any direction

    var col = piecePos[0];
    var row = piecePos[1];
    validMoves = [];

    // Up
    if (parseInt(row) > 1) {
        var move = col + (parseInt(row) - 1);
        if (checkForPieces(move, color) == 'empty') {
            validMoves.push(move);
        }
        else if (checkForPieces(move, color) != color) {
            attackables.push(move);validMoves.push(move)
        }
    }

    // Down
    var col = piecePos[0];
    var row = piecePos[1];
    if (parseInt(row) < 8) {
        var move = col + (parseInt(row) + 1);
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    // Left
    var col = piecePos[0];
    var row = piecePos[1];
    if (String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
        var move = String.fromCharCode(col.charCodeAt(0) - 1) + row;
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    // Right
    var col = piecePos[0];
    var row = piecePos[1];
    if (String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
        var move = String.fromCharCode(col.charCodeAt(0) + 1) + row;
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    // Up-Left
    var col = piecePos[0];
    var row = piecePos[1];
    if (parseInt(row) > 1 && String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
        var move = String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) - 1);
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    // Up-Right
    var col = piecePos[0];
    var row = piecePos[1];
    if (parseInt(row) > 1 && String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
        var move = String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) - 1);
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    // Down-Left
    var col = piecePos[0];
    var row = piecePos[1];
    if (parseInt(row) < 8 && String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
        var move = String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) + 1);
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    // Down-Right
    var col = piecePos[0];
    var row = piecePos[1];
    if (parseInt(row) < 8 && String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
        var move = String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) + 1);
        if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
    }

    //check valid moves for check state

    

    //king's side castling



    return validMoves;    
}




function kingValidMovesNew(piecePos,color) {
  // King can move one step in any direction

  var col = piecePos[0];
  var row = piecePos[1];
  validMoves = [];

  // Up
  if (parseInt(row) > 1) {
      var move = col + (parseInt(row) - 1);
      if (checkForPieces(move, color) == 'empty') {
          validMoves.push(move);
      }
      else if (checkForPieces(move, color) != color) {
          attackables.push(move);validMoves.push(move)
      }
  }

  // Down
  var col = piecePos[0];
  var row = piecePos[1];
  if (parseInt(row) < 8) {
      var move = col + (parseInt(row) + 1);
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  // Left
  var col = piecePos[0];
  var row = piecePos[1];
  if (String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
      var move = String.fromCharCode(col.charCodeAt(0) - 1) + row;
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  // Right
  var col = piecePos[0];
  var row = piecePos[1];
  if (String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
      var move = String.fromCharCode(col.charCodeAt(0) + 1) + row;
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  // Up-Left
  var col = piecePos[0];
  var row = piecePos[1];
  if (parseInt(row) > 1 && String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
      var move = String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) - 1);
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  // Up-Right
  var col = piecePos[0];
  var row = piecePos[1];
  if (parseInt(row) > 1 && String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
      var move = String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) - 1);
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  // Down-Left
  var col = piecePos[0];
  var row = piecePos[1];
  if (parseInt(row) < 8 && String.fromCharCode(col.charCodeAt(0) - 1) >= "A") {
      var move = String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) + 1);
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  // Down-Right
  var col = piecePos[0];
  var row = piecePos[1];
  if (parseInt(row) < 8 && String.fromCharCode(col.charCodeAt(0) + 1) <= "H") {
      var move = String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) + 1);
      if (checkForPieces(move, color) == 'empty') {
        validMoves.push(move);
    }
    else if (checkForPieces(move, color) != color) {
        attackables.push(move);validMoves.push(move)
    }
  }

  //king's side castling

  //check valid moves for check state

  //finally checkmate



  return validMoves;    
}



function pawnValidMoves(piecePos,color) {


    var col = piecePos[0];
    var row = piecePos[1];
    validMoves = [];

    // White Pawn
    if(color=='whitePiece'){

       // 1 step forward
      var oneStepAllowed = true;
        var move = col + (parseInt(row)-1);
        if(checkForPieces(move,color)!="whitePiece" && checkForPieces(move,color)!="blackPiece" && parseInt(row)>1){
            validMoves.push(move);
        }
        else oneStepAllowed = false;

        if(parseInt(row)==7&&oneStepAllowed){
            // 2 steps forward

            
            var move = col + (parseInt(row)-2);
            if(checkForPieces(move,color)!="whitePiece" && checkForPieces(move,color)!="blackPiece"){
              validMoves.push(move);
            }
        }
           
        // Attack

        if(parseInt(row)-1>=0 && col.charCodeAt(0)-1>=65){
        var move = String.fromCharCode(col.charCodeAt(0)-1) + (parseInt(row)-1);
        if(checkForPieces(move,color)=="blackPiece"){
            attackables.push(move);validMoves.push(move)
        }
        }

        if(parseInt(row)-1>=0 && col.charCodeAt(0)+1<=72){
        var move = String.fromCharCode(col.charCodeAt(0)+1) + (parseInt(row)-1);
        if(checkForPieces(move,color)=="blackPiece"){
            attackables.push(move);validMoves.push(move)
        }
        }

    }
    // Black Pawn
    else{
        var oneStepAllowed = true;

          // 1 step forward
        var move = col + (parseInt(row)+1);
        if(checkForPieces(move,color)!="whitePiece" && checkForPieces(move,color)!="blackPiece"&&parseInt(row)<8){
            validMoves.push(move);
        }
        else oneStepAllowed = false;
        if(parseInt(row)==2&&oneStepAllowed){
            // 2 steps forward
            var move = col + (parseInt(row)+2);
            if(checkForPieces(move,color)!="whitePiece" && checkForPieces(move,color)!="blackPiece"){
              validMoves.push(move);
            }
        }
          
        
        // Attack
        
        if(parseInt(row)+1<=8 && col.charCodeAt(0)-1>=65){
          var move = String.fromCharCode(col.charCodeAt(0)-1) + (parseInt(row)+1);
          if(checkForPieces(move,color)=="whitePiece"){
            attackables.push(move);validMoves.push(move)
          }
          }
  
          if(parseInt(row)-1>=0 && col.charCodeAt(0)+1<=72){
          var move = String.fromCharCode(col.charCodeAt(0)+1) + (parseInt(row)+1);
          if(checkForPieces(move,color)=="whitePiece"){
            attackables.push(move);validMoves.push(move)
          }
          }
    }

    //pawn when move first time the special attack is allowed add it to attackable
    //to be written

    //pawn on last row
    

    return validMoves;
}
