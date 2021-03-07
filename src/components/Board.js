import React from "react";

const Board = ({ board, whiteHistory, blackHistory }) => {
  return (
    <div className="body">
      <div className="history whitehistory">
        <div className="title">White History</div>
        <ul>{whiteHistory}</ul>
      </div>

      <div className="board">{board}</div>

      <div className="history blackhistory">
        <div className="title">Black History</div>
        <ul>{blackHistory}</ul>
      </div>
    </div>
  );
};

export default Board;
