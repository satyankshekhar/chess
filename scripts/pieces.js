function createPiece(color, type) {
    var piece = document.createElement('div');
    var icon = document.createElement('img');
    icon.src = `asset/${type}-${color.charAt(0)}.svg`;
    icon.alt = type;
    icon.style.fill = 'green';
    icon.className = 'piecesImage';
    piece.appendChild(icon);
    piece.className = 'piece';
    piece.classList.add(type.toLowerCase());
    piece.classList.add(`${color.toLowerCase()}Piece`);
    return piece;
}