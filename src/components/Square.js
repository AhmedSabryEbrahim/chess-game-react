import React from "react";
import { getPieceInfo } from "./Utilities/PieceUtil";

const Square = ({ value, color, onClick }) => {
  let style = { backgroundColor: color };
  let squareValue = value;
  let selectedSquare = false;

  if (value) {
    let [selected, pieceColor, pieceValue] = getPieceInfo(value);

    style = { backgroundColor: color, color: pieceColor };
    squareValue = pieceValue;
    selectedSquare = selected;
  }
  const className = selectedSquare === true ? `selected squares ` : `squares`;

  return (
    <button style={style} className={className} onClick={onClick}>
      {squareValue}
    </button>
  );
};

export default Square;
