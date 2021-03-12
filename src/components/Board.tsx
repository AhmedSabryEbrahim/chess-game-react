import React from "react";

const Board: React.FunctionComponent<{
  board: any;
}> = ({ board }) => {
  return <div className="board">{board}</div>;
};

export default Board;
