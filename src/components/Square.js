import React from "react";
import { getPieceInfo } from "./Utilities/PieceUtil";

const Square = ({ value, squareColor, onClick }) => {
  let squareValue = value;
  let selectedSquare = false;
  let squareClassName = ` squares ${squareColor}square`;
  let pieceClassName = null;

  if (value) {
    let [selected, pieceColor, pieceValue] = getPieceInfo(value);

    squareValue = pieceValue;
    selectedSquare = selected;
    pieceClassName = `${pieceColor}piece`;
  }
  squareClassName =
    selectedSquare === true ? `selected ${squareClassName} ` : squareClassName;

  console.log(squareClassName);

  return (
    <button className={squareClassName} onClick={onClick}>
      <div className={pieceClassName}>{squareValue}</div>
    </button>
  );
};

export default Square;
