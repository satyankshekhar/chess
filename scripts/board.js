var boardLayout = [
   [
    createPiece('black', 'rook'), 
    createPiece('black', 'knight'),
    createPiece('black', 'bishop'),
    createPiece('black', 'queen'),
    createPiece('black', 'king'),
    createPiece('black', 'bishop'),
    createPiece('black', 'knight'),
    createPiece('black', 'rook')
    ],

   [
    createPiece('black','pawn'),
    createPiece('black','pawn'),
    createPiece('black','pawn'),
    createPiece('black','pawn'),
    createPiece('black','pawn'),
    createPiece('black','pawn'),
    createPiece('black','pawn'),
    createPiece('black','pawn')
    ],

    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],


    [
    createPiece('white','pawn'),
    createPiece('white','pawn'),
    createPiece('white','pawn'),
    createPiece('white','pawn'),
    createPiece('white','pawn'),
    createPiece('white','pawn'),
    createPiece('white','pawn'),
    createPiece('white','pawn')
    ],

    [createPiece('white', 'rook'), 
    createPiece('white', 'knight'), 
    createPiece('white', 'bishop'), 
    createPiece('white', 'queen'), 
    createPiece('white', 'king'), 
    createPiece('white', 'bishop'), 
    createPiece('white', 'knight'), 
    createPiece('white', 'rook')]
   
];

for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
        var col = String.fromCharCode('A'.charCodeAt(0)+j);
        if(col==7 && i==1)console.log("ye kaam to hua h")
        var row = i+1;
        var cell = document.getElementById(col+row);
        if(boardLayout[i][j]!=null){
            cell.appendChild(boardLayout[i][j]);
        }
    }
}