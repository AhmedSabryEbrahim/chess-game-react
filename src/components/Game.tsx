import { useReducer, useState } from "react";
import Board from "./Board";
import History from "./History";
import { GameState } from "./classes/GameState";
import { Point, ChessColors } from "./classes/PieceUtil";

function reducer(state: GameState, point: Point) {
  return !state.selected.isValidPoint()
    ? state.selectSqaure(point)
    : state.preformMove(state.selected, point);
}

const Game = () => {
  const [state, dispatch] = useReducer<
    (state: GameState, point: Point) => GameState
  >(reducer, new GameState());

  function handleSelect(point: Point) {
    if (point.isValidPoint()) dispatch(point);
    setboard(state.board.renderBoard(handleSelect));
    setWhitetHistory(state.history.renderWhiteHistory());
    setBlackHistory(state.history.renderBlackHistory());
    return;
  }

  const [board, setboard] = useState<Array<any>>(() =>
    state.board.renderBoard(handleSelect)
  );
  const [whiteHistoryList, setWhitetHistory] = useState<Array<any>>([]);
  const [blackHistoryList, setBlackHistory] = useState<Array<any>>([]);

  return (
    <div className="body">
      <History history={whiteHistoryList} color={ChessColors.WHITE} />
      <Board board={board} />
      <History history={blackHistoryList} color={ChessColors.BLACK} />
    </div>
  );
};
export default Game;
