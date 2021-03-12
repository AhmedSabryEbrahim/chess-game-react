import Piece from "./Piece";
import {ChessSquare} from "./classes/ChessBoard";

const Square: React.FunctionComponent<{square: ChessSquare}>= ({square}) => {
  let squareClassName = ` squares ${square.color}square`;
  if(square.selected)
    squareClassName= squareClassName.concat(" selected");
  return (
    <button className={squareClassName} onClick={()=>square.action.action(square.point)}>
      <Piece piece={square.piece} />
    </button>
  );
};

export default Square;