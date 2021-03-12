import { ChessPiece } from "./classes/ChessPiece";

const Piece: React.FunctionComponent<{ piece: ChessPiece }> = ({ piece }) => {
  return <div className={`${piece.color}piece`}>{piece.pieceName}</div>;
};

export default Piece;
