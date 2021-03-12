import { useReducer } from "react";
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

  return (
    <div className="body">
      <History history={state.history.whiteHistory} color={ChessColors.WHITE} />
      <Board board={state.board} action={dispatch} />
      <History history={state.history.blackHistory} color={ChessColors.BLACK} />
    </div>
  );
};
export default Game;
