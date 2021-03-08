import { validatePieceMove } from "./MovePieceValidation";
import { getCellValueInMatrix } from "./MovePiece";
import { getPieceInfo } from "./PieceUtil";

export function validateMove(
  board: any,
  source: any,
  destination: any,
  stepNumber: any
) {
  const [selected, color, peice] = getPieceInfo(
    getCellValueInMatrix(board, source.x, source.y)
  );
  if (!peice) return false;
  if (notValidTurn(stepNumber, color)) return false;
  if (notValidMove(board, source, destination, color, peice)) return false;

  return validatePieceMove(source, destination, color, peice);
}

export function validateSelect(board: any, source: any, stepNumber: any) {
  const [selected, color, peice] = getPieceInfo(
    getCellValueInMatrix(board, source.x, source.y)
  );
  if (!peice) return false;

  if (notValidTurn(stepNumber, color)) return false;

  return true;
}

function notValidMove(
  board: any,
  source: any,
  destination: any,
  color: any,
  peice: any
) {
  if (sameSquare(source, destination)) return true;
  if (isKingUnderThreat(board, source, destination)) return true;
  return false;
}

function notValidTurn(stepNumber: number, color: any) {
  return (
    (stepNumber % 2 == 0 && color == "black") ||
    (stepNumber % 2 != 0 && color == "white")
  );
}

function sameSquare(source: any, destination: any) {
  return source.x === destination.x && source.y === destination.y;
}

function isKingUnderThreat(board: any, source: any, destination: any) {
  return false;
}
