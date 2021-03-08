import { Piece } from "./PieceUtil";
export function validatePieceMove(source, destination, color, piece) {
  switch (piece) {
    case Piece.PAWN:
      return validPawnMoven(source, destination, color);
    case Piece.PAWN:
      return validPawnMoven(source, destination, color);
    case Piece.PAWN:
      return validPawnMoven(source, destination, color);
    case Piece.PAWN:
      return validPawnMoven(source, destination, color);
    default:
      return true;
  }
}

function validPawnMoven(source, destination, color) {
  console.log(source.x, source.y, destination.x, destination.y);
  if (source.y !== destination.y) return false;
  if (color === "black") {
    if (source.x > destination.x) return false;
    if (source.x === 1) {
      if (destination.x - source.x > 2) return false;
    } else if (destination.y - source.y > 1) return false;
  } else {
    if (source.x < destination.x) return false;
    if (source.x === 6) {
      if (source.x - destination.x > 2) return false;
    } else if (source.x - destination.x > 1) return false;
  }
  return true;
}
