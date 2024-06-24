document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (e) => {
      if (
        cell.classList.contains("attackable") &&
        cell.hasChildNodes() &&
        cell.firstChild.classList[2] != selectedPiece.classList[2]
      ) {
        cell.removeChild(cell.firstChild);
        cell.appendChild(selectedPiece);
        resetValidMoves();
        resetAttackables();
        flip();
        selectedPiece = null;

        updateThreats();

      } else if (cell.hasChildNodes()) {
        if (cell.id == "H2") {
          // console.log('H8 is clicked');
          // console.log(document.getElementById('H8').firstChild.classList[1]);
        }
        resetAttackables();
        var piece = cell.firstChild;
        var pieceType = piece.classList[1];
        var piecePos = piece.parentElement.id;
        var color = piece.classList[2];

        if (selectedPiece != null && selectedPiece != piece) {
          resetValidMoves();
          selectedPiece = cell.firstChild;
        } else {
          selectedPiece = cell.firstChild;
        }

        validMoves = [];

        if (color == turn) {
          validMoves = window[`${pieceType}ValidMoves`](piecePos, color);

          function isMoveSafe(move) {
            let currPos = selectedPiece.parentElement.id;
            let cell = document.getElementById(move);
            let prevPiece = null;
            let decision;
        
            if(cell.firstChild){
                prevPiece = cell.firstChild;
                cell.removeChild(prevPiece);
            }
        
            cell.appendChild(selectedPiece);
            updateThreats();
            decision = window[`${turn.substring(0,5)}KingInCheck`];
            cell.removeChild(selectedPiece);
        
            if(prevPiece){
                cell.appendChild(prevPiece);
            }
        
            document.getElementById(currPos).appendChild(selectedPiece);
            return !decision;
        }
        
        tempValidMoves = [];
        validMoves = validMoves.forEach(move=>{
          if(isMoveSafe(move))tempValidMoves.push(move);
        });
        console.log(tempValidMoves);
        attackables = [];
        validMoves = window[`${pieceType}ValidMoves`](piecePos, color);
        validMoves = tempValidMoves;

          makeValidMoves(validMoves);
          makeAttackables(attackables);
        }
      } else if (cell.classList.contains("moveable")) {

        cell.appendChild(selectedPiece);
        resetValidMoves();
        resetAttackables();
        flip();
        selectedPiece = null;
        updateThreats();

      } else {
        resetValidMoves();
        resetAttackables();
      }
    });
  });

  document.querySelectorAll(".moveable").forEach((cell) => {
    cell.addEventListener("click", (e) => {
      cell.appendChild(selectedPiece);
      resetValidMoves();
      selectedPiece = null;
    });
  });
});
