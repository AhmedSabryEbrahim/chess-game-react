import {
  getCellValueInMatrix,
  changeCellInMatrix,
  preformMove,
} from "./MovePiece";

import { validateMove, validateSelect } from "./MoveValidation";

export const initialGameState = {
  board: initizeBoard(),
  selected: null,
  step: 0,
  whiteHistory: [],
  blackHistory: [],
};

export function reducer(state: any, { x, y }: any) {
  let currValue = getCellValueInMatrix(state.board, x, y);
  console.log(x, y, currValue);

  if (state.selected) {
    if (validateMove(state.board, state.selected, { x, y }, state.step)) {
      preformMove(state, state.selected, { x, y });
    }
    currValue = getCellValueInMatrix(
      state.board,
      state.selected.x,
      state.selected.y
    );
    if (currValue && currValue.indexOf("*") === 0) {
      currValue = currValue.substring(1, currValue.length);
      state.board = changeCellInMatrix(
        state.board,
        state.selected.x,
        state.selected.y,
        currValue
      );
    }
    state.selected = null;
  } else if (validateSelect(state.board, { x, y }, state.step)) {
    currValue = currValue.indexOf("*") < 0 ? "*" + currValue : currValue;
    state.board = changeCellInMatrix(state.board, x, y, currValue);
    state.selected = { x, y };
  } else state.selected = null;

  return state;
}

function initizeBoard() {
  let board = new Array(8).fill(new Array(8).fill(null));
  board[1] = new Array(8).fill("B,P");
  board[6] = new Array(8).fill("W,P");
  board[0] = ["B,R", "B,N", "B,B", "B,Q", "B,K", "B,B", "B,N", "B,R"];
  board[7] = ["W,R", "W,N", "W,B", "W,Q", "W,K", "W,B", "W,N", "W,R"];

  return board;
}
