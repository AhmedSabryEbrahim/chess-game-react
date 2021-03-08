import { validatePieceMove } from "./MovePieceValidation";
import { getCellValueInMatrix } from "./MovePiece";
import { getPieceInfo } from "./PieceUtil";

export function validateMove(board, source, destination, stepNumber) {
  const [selected, color, peice] = getPieceInfo(
    getCellValueInMatrix(board, source.x, source.y)
  );
  if (!peice) return false;
  if (notValidTurn(stepNumber, color)) return false;
  if (notValidMove(board, source, destination, color, peice)) return false;

  return validatePieceMove(source, destination, color, peice);
}

export function validateSelect(board, source, stepNumber) {
  const [selected, color, peice] = getPieceInfo(
    getCellValueInMatrix(board, source.x, source.y)
  );
  if (!peice) return false;

  if (notValidTurn(stepNumber, color)) return false;

  return true;
}

function notValidMove(board, source, destination, color, peice) {
  if (sameSquare(source, destination)) return true;
  if (isKingUnderThreat(board, source, destination, color, peice)) return true;
  return false;
}

function notValidTurn(stepNumber, color) {
  return (
    (stepNumber % 2 == 0 && color == "black") ||
    (stepNumber % 2 != 0 && color == "white")
  );
}

function sameSquare(source, destination) {
  return source.x === destination.x && source.y === destination.y;
}

function isKingUnderThreat(board, source, destination) {
  return false;
}
