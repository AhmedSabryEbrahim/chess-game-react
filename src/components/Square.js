import React from "react";
import { getPieceInfo } from "./Utilities/PieceUtil";
import Piece from "./Piece";

const Square = ({ value, squareColor, onClick }) => {
  let piece = null;
  let pieceColor = null;
  let selectedSquare = false;
  let squareClassName = ` squares ${squareColor}square`;

  if (value) {
    let [selected, _pieceColor, pieceValue] = getPieceInfo(value);
    piece = pieceValue;
    selectedSquare = selected;
    pieceColor = _pieceColor;
  }
  if (selectedSquare === true) {
    squareClassName = `selected ${squareClassName} `;
  }

  return (
    <button className={squareClassName} onClick={onClick}>
      <Piece piece={piece} color={pieceColor} />
    </button>
  );
};

export default Square;
