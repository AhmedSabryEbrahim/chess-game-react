import { validateMove } from "./MoveValidation";

export function changeCellInMatrix(matrix, x, y, value) {
  let row = [...matrix[x]];
  row[y] = value;
  matrix[x] = [...row];
  return matrix;
}

export function getCellValueInMatrix(matrix, x, y) {
  let row = [...matrix[x]];
  return row[y];
}

export function movePieceTo(board, source, destination) {
  let value = getCellValueInMatrix(board, source.x, source.y);

  value = value.indexOf("*") == 0 ? value.substring(1, value.length) : value;

  if (value && source !== destination) {
    board = changeCellInMatrix(board, source.x, source.y, null);
    board = changeCellInMatrix(board, destination.x, destination.y, value);
  }
  return board;
}

export function preformMove(state, source, destination) {
  state.board = movePieceTo(state.board, source, destination);
  let stepDescription =
    "(" +
    state.selected.x +
    "," +
    state.selected.y +
    ") => (" +
    destination.x +
    "," +
    destination.y +
    ")";

  if (state.step % 2 === 0)
    state.whiteHistory = state.whiteHistory.concat(stepDescription);
  else state.blackHistory = state.blackHistory.concat(stepDescription);
  state.step += 1;

  return state;
}
