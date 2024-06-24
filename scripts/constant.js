var validMoves = [];
var attackables = [];

var whiteThreats = [];
var blackThreats = [];

var selectedPiece = null;
var blackMove = -1;
var whiteMove = 1;

var turn = 'whitePiece';
var kingCheckCount = 0;

var moveableImage = "radial-gradient(black, #f5f5f500, #f5f5f500)"
var attackableImage = "radial-gradient(#ff0404, #f5050596, #f5f5f500)";

var blackKingCheck = false;
var whiteKingCheck = false;


var gameMoves = [];