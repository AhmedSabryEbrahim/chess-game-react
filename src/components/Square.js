import React from "react";
import { getPieceInfo } from "./Utilities/PieceUtil";

const Square = ({ value, color, onClick }) => {
  let style = { backgroundColor: color };
  let squareValue = value;

  if (value) {
    let [pieceColor, pieceValue] = getPieceInfo(value);
    style = { backgroundColor: color, color: pieceColor };
    squareValue = pieceValue;
  }
  const className = value ? `squares ${squareValue}` : `squares`;
  return (
    <button style={style} className={className} onClick={onClick}>
      {squareValue}
    </button>
  );
};

export default Square;
