import React, { useState } from "react";
import Square from "./Square";

const Board: React.FunctionComponent<{
  board: any;
}> = ({ board }) => {
  return <div className="board">{board}</div>;
};

export default Board;
