function getPawnaAttacks(piecePos, color) {
  var attacks = [];
  var col = piecePos[0];
  var row = piecePos[1];

  // White Pawn
  if (color == "whitePiece") {
    if (parseInt(row) - 1 >= 0 && col.charCodeAt(0) - 1 >= 65) {
      var move =
        String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) - 1);

      attacks.push(move);
    }

    if (parseInt(row) - 1 >= 0 && col.charCodeAt(0) + 1 <= 72) {
      var move =
        String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) - 1);
      attacks.push(move);
    }
  }
  // Black Pawn
  else {
    if (parseInt(row) + 1 <= 8 && col.charCodeAt(0) - 1 >= 65) {
      var move =
        String.fromCharCode(col.charCodeAt(0) - 1) + (parseInt(row) + 1);
      attacks.push(move);
    }

    if (parseInt(row) - 1 >= 0 && col.charCodeAt(0) + 1 <= 72) {
      var move =
        String.fromCharCode(col.charCodeAt(0) + 1) + (parseInt(row) + 1);
      attacks.push(move);
    }
  }
  return attacks;
}

function pieceThreat(pieceType, piecePos, color) {
  var threats = [];
  switch (pieceType) {
    case "rook":
      threats = rookValidMoves(piecePos, color);
      break;
    case "bishop":
      threats = bishopValidMoves(piecePos, color);
      break;
    case "knight":
      threats = knightValidMoves(piecePos, color);
      break;
    case "queen":
      threats = queenValidMoves(piecePos, color);
      break;
    case "king":
      threats = kingValidMoves(piecePos, color);
      break;
    case "pawn":
      threats = getPawnaAttacks(piecePos, color);
      break;
  }
  return threats;
}
