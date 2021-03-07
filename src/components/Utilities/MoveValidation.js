import { getCellValueInMatrix } from "./MovePiece";
import { getPieceInfo } from "./PieceUtil";

export function validateMove(board, source, destination, stepNumber) {
  const [color, peice] = getPieceInfo(
    getCellValueInMatrix(board, source.x, source.y)
  );

  if (!peice) return false;

  if (notValidTurn(stepNumber, color)) return false;

  if (notValidMove(board, source, destination, color, peice)) return false;

  return true;
}

function isCauseKingThreat(board, source, destination) {
  return false;
}

function notValidMove(board, source, destination, color, peice) {
  if (isCauseKingThreat(board, source, destination, color, peice)) return false;
  return false;
}

function notValidTurn(stepNumber, color) {
  return (
    (stepNumber % 2 == 0 && color == "black") ||
    (stepNumber % 2 != 0 && color == "white")
  );
}
