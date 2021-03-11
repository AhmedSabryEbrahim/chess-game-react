import Piece from "./Piece";
import {ChessSquare} from "./classes/ChessBoard";
import { Point } from "./classes/PieceUtil";

const Square: React.FunctionComponent<{square: ChessSquare}>= (square) => {
  let squareClassName = ` squares ${square.square.color}square`;
  return (
    <button className={squareClassName} onClick={()=>square.square.action.action(square.square.point)}>
      <Piece piece={square.square.piece} />
    </button>
  );
};

export default Square;
