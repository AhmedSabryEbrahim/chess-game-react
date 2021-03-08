import { getPieceInfo } from "./Utilities/PieceUtil";
import { ChessSquare } from "./Utilities/ChessTypes";
import Piece from "./Piece";

const Square: React.FunctionComponent<ChessSquare> = ({
  content,
  color,
  action,
}) => {
  let piece = null;
  let pieceColor = null;
  let selectedSquare = false;
  let squareClassName = ` squares ${color}square`;

  if (content) {
    let [selected, _pieceColor, pieceValue] = getPieceInfo(content);
    piece = pieceValue;
    selectedSquare = selected;
    pieceColor = _pieceColor;
  }
  if (selectedSquare === true) {
    squareClassName = `selected ${squareClassName} `;
  }

  return (
    <button className={squareClassName} onClick={action}>
      <Piece piece={piece} color={pieceColor} />
    </button>
  );
};

export default Square;
