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

  if (value && source !== destination) {
    board = changeCellInMatrix(board, source.x, source.y, null);
    board = changeCellInMatrix(board, destination.x, destination.y, value);
  }
  return board;
}

export function preformMove(state, source, destination) {
  let currValue = getCellValueInMatrix(state.board, source.x, source.y);
  state.board = movePieceTo(state.board, source, destination);
  state.step += 1;
  let stepDescription =
    "Move " +
    state.step +
    " peice :" +
    currValue +
    " from " +
    state.selected +
    " to " +
    destination;

  console.log(stepDescription);
  state.history = [...state.history, stepDescription];
  return state;
}
