import { useReducer, useState } from "react";
import Board from "./Board";
import History from "./History";
import {GameState} from "./classes/GameState";
import { Point ,ChessColors} from "./classes/PieceUtil";

function reducer(state: GameState, point: Point) {
  console.log(point);
  console.log("from "+state.selected.x+" "+state.selected.y);
  console.log("to "+point.x+" "+point.y);
  if (state.selected.isValidPoint()) {
    state= state.preformMove(state.selected, point);
  } else{
    state= state.selectSqaure(point);
  }
  return state;
}

const Game = () => {
  
  const [state, dispatch] = useReducer<(state:GameState , point: Point)=> GameState>(reducer, new GameState());

  function handleSelect(point: Point){
    if(point.isValidPoint()) 
      reducer(state, point);
    setboard(state.board.renderBoard(handleSelect));
    setWhitetHistory(state.history.renderWhiteHistory());
    setBlackHistory(state.history.renderBlackHistory());
  
    return;
  };


  const [board , setboard] = useState<(Array<any>)>([]);
  const [whiteHistoryList, setWhitetHistory] = useState<(Array<any>)>([]);
  const [blackHistoryList, setBlackHistory] = useState<(Array<any>)>([]);


  return (
    <div className="body">
      <button onClick={()=>handleSelect(new Point(-1,-1))} >START</button>
      <History history={whiteHistoryList} color={ChessColors.WHITE} />
      <Board board={board} />
      <History history={blackHistoryList} color={ChessColors.BLACK} />
    </div>
  );
};
export default Game;
