import React, { useReducer, useState } from "react";
import { renderBoard, initizeBoard } from "./Utilities/BoardUtils";
import { getCellValueInMatrix, preformMove } from "./Utilities/MovePiece";
import { validateMove } from "./Utilities/MoveValidation";

function reducer(state, { x, y }) {
  let currValue = getCellValueInMatrix(state.board, x, y);

  if (state.selected) {
    if (validateMove(state.board, state.selected, { x, y }, state.step)) {
      preformMove(state, state.selected, { x, y });
    }
    state.selected = null;
  } else if (currValue) state.selected = { x, y };
  else state.selected = null;

  console.log(state.selected);
  return state;
}

const Game = () => {
  const [state, dispatch] = useReducer(reducer, {
    board: initizeBoard(),
    selected: null,
    step: 0,
    history: [],
  });

  const handleSelect = (action) => {
    reducer(state, action);
    setList(renderBoard(state.board, handleSelect));

    if (state.step > 0) {
      let historyStep = (
        <li key={state.step}>{state.history[state.step - 1]}</li>
      );
      if (state.step % 2 == 0) setWhiteHistory([...whiteHistory, historyStep]);
      else setBlackHistory([...blackHistory, historyStep]);
    }
  };

  const [list, setList] = useState(renderBoard(state.board, handleSelect));
  const [whiteHistory, setWhiteHistory] = useState([]);
  const [blackHistory, setBlackHistory] = useState([]);
  return (
    <div>
      <div className="whitehistory">{whiteHistory}</div>
      <div className="board">{list}</div>
      <div className="blackhistory">{blackHistory}</div>
    </div>
  );
};
export default Game;
