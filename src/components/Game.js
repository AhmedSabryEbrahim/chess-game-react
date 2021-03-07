import React, { useReducer, useState } from "react";
import { renderBoard, initizeBoard } from "./Utilities/BoardUtils";
import {
  getCellValueInMatrix,
  changeCellInMatrix,
  preformMove,
} from "./Utilities/MovePiece";
import { validateMove, validateSelect } from "./Utilities/MoveValidation";
import Board from "./Board";

function reducer(state, { x, y }) {
  let currValue = getCellValueInMatrix(state.board, x, y);

  if (state.selected) {
    if (validateMove(state.board, state.selected, { x, y }, state.step)) {
      preformMove(state, state.selected, { x, y });
    }
    state.selected = null;
  } else if (validateSelect(state.board, { x, y }, state.step)) {
    state.board = changeCellInMatrix(state.board, x, y, "*" + currValue);
    state.selected = { x, y };
  } else state.selected = null;

  return state;
}

const Game = () => {
  const [state, dispatch] = useReducer(reducer, {
    board: initizeBoard(),
    selected: null,
    step: 0,
    whiteHistory: [],
    blackHistory: [],
  });

  const handleSelect = (action) => {
    reducer(state, action);
    setBoard(renderBoard(state.board, handleSelect));
    setWhiteHistory(
      state.whiteHistory
        ? state.whiteHistory.map((item, key) => <li key={key}>{item}</li>)
        : null
    );
    setBlackHistory(
      state.blackHistory
        ? state.blackHistory.map((item, key) => <li key={key}>{item}</li>)
        : null
    );
  };

  const [board, setBoard] = useState(renderBoard(state.board, handleSelect));
  const [whiteHistoryList, setWhiteHistory] = useState([]);
  const [blackHistoryList, setBlackHistory] = useState([]);
  return (
    <Board
      board={board}
      whiteHistory={whiteHistoryList}
      blackHistory={blackHistoryList}
    />
  );
};
export default Game;
