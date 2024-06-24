function flip() {
  if (turn == "whitePiece") {
    turn = "blackPiece";
  } else {
    turn = "whitePiece";
  }
}

function updateThreats() {
  blackThreat = [];
  whiteThreat = [];
  blackKingInCheck = false; 
  whiteKingInCheck = false;
  document.querySelectorAll(".piece").forEach((piece) => {
    var pieceType = piece.classList[1];
    var color = piece.classList[2];
    var piecePos = piece.parentElement.id;

    var threat = pieceThreat(pieceType, piecePos, color);

    if (piece.classList.contains("whitePiece")) {
      threat.forEach((move) => {
        if (!whiteThreat.includes(move)) whiteThreat.push(move);
        // document.getElementById(move).style.backgroundImage = "radial-gradient(black, green, white)";
        
      });
    } else {
      threat.forEach((move) => {
        if (!blackThreat.includes(move)) blackThreat.push(move);
        // document.getElementById(move).style.backgroundImage = "radial-gradient(black, yellow, white)";
      });
    }

    // console.log("blackThreat: ", blackThreat);
  });

  whiteThreat.forEach((move) => {
    var square = document.getElementById(move);
   // console.log(console.log(square.classList));
    if(square.firstChild){
    if(square.firstChild.classList.contains("blackPiece")&&(square.firstChild.classList.contains("king"))){
      blackKingInCheck = true; 
      console.log("black king in check");
    }
  }

})

  blackThreat.forEach((move) => {
    var square = document.getElementById(move);
    if(square.firstChild){
    if(square.firstChild.classList.contains("whitePiece")&&(square.firstChild.classList.contains("king"))){
      whiteKingInCheck = true; 
      console.log("white king in check");
    }
  }
  });
}

function resetValidMoves() {
  validMoves.forEach((move) => {
    var element = document.getElementById(move);
    element.style.backgroundImage = "";
    element.style.cursor = "default";
    element.classList.remove("moveable");
  });
  validMoves = [];
}

function makeValidMoves() {
  if (validMoves.length == 0) return;
  validMoves.forEach((move) => {
    var element = document.getElementById(move);
    element.style.backgroundImage = moveableImage;
    element.style.cursor = "pointer";
    element.classList.add("moveable");
  });
}

function makeAttackables() {
  if (attackables.length == 0) return;
  attackables.forEach((move) => {
    var element = document.getElementById(move);
    element.style.backgroundImage = attackableImage;
    element.style.cursor = "pointer";
    element.classList.add("attackable");
  });
}

function resetAttackables() {
  // console.log("reset shuru me to chala");
  attackables.forEach((move) => {
    var element = document.getElementById(move);
    element.style.backgroundImage = "";
    element.style.cursor = "default";
    element.classList.remove("attackable");
  });
  attackables = [];
}

function checkForPieces(move, color) {
  var element = document.getElementById(move);
  if (element.children.length == 0) return "empty";
  else if (element.children[0].classList.contains("blackPiece"))
    return "blackPiece";
  else return "whitePiece";
}
