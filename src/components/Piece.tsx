import { ChessPiece } from "./Utilities/ChessTypes";

const Piece: React.FunctionComponent<ChessPiece> = ({ piece, color }) => {
  return <div className={`${color}piece`}>{piece}</div>;
};

export default Piece;
