import React from "react";

const Piece = ({ piece, color }) => {
  return <div className={`${color}piece`}>{piece}</div>;
};

export default Piece;
