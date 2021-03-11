import { ChessPiece } from "./classes/ChessPiece";


const Piece: React.FunctionComponent<{piece: ChessPiece}> = ({piece}) => {
  return <>{piece.renderPiece()}</>;
};

export default Piece;
