import { useReducer, useState } from "react";
import { initialGameState, reducer } from "./Utilities/BoardUtils";
import { renderBoard, renderHistory } from "./Utilities/RenderUtils";
import Board from "./Board";
import History from "./History";
import { ChessColors } from "./Utilities/ChessTypes";

const Game = () => {
  const [state, dispatch] = useReducer(reducer, initialGameState);
  const handleSelect = (action: any) => {
    reducer(state, action);
    setboard(renderBoard(state.board, handleSelect));
    setWhitetHistory(renderHistory(state.whiteHistory));
    setBlackHistory(renderHistory(state.blackHistory));
    return;
  };

  const [board, setboard] = useState(renderBoard(state.board, handleSelect));
  const [whiteHistoryList, setWhitetHistory] = useState([]);
  const [blackHistoryList, setBlackHistory] = useState([]);
  return (
    <div className="body">
      <History history={whiteHistoryList} color={ChessColors.WHITE} />
      <Board board={board} />
      <History history={blackHistoryList} color={ChessColors.BLACK} />
    </div>
  );
};
export default Game;
