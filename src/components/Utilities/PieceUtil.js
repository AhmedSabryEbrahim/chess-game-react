export const Piece = {
  KING: "K",
  Queen: "Q",
  ROOK: "R",
  NIGHT: "N",
  BISHOP: "B",
  PAWN: "P",
  EMPTY: null,
};

export function getPieceInfo(value) {
  let piece = Piece.EMPTY;
  let color = null;
  let selected = false;

  if (value) {
    let [pieceColor, pieceChar] = value.split(",");
    switch (pieceChar) {
      case "K":
        piece = Piece.KING;
        break;
      case "Q":
        piece = Piece.Queen;
        break;
      case "R":
        piece = Piece.ROOK;
        break;
      case "N":
        piece = Piece.NIGHT;
        break;
      case "B":
        piece = Piece.BISHOP;
        break;
      case "P":
        piece = Piece.PAWN;
        break;
      default:
        piece = Piece.EMPTY;
        break;
    }
    if (pieceColor.indexOf("*") >= 0) {
      selected = true;
      pieceColor = pieceColor[pieceColor.indexOf("*") + 1];
    }
    color = pieceColor === "B" ? "black" : "white";
  }
  return [selected, color, piece];
}

export function getKingPos(board, color) {
  let kingPos = null;

  return kingPos;
}
