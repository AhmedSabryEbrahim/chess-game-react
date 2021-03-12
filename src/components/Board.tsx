import React, { useState } from "react";
import { ChessBoard, ChessSquare } from "./classes/ChessBoard";
import Square from "./Square";
import { Point } from "./classes/PieceUtil";

const Board: React.FunctionComponent<{
  board: ChessBoard;
  action: any;
}> = ({ board, action }) => {
  const handleAction = (point: Point) => {
    action(point);
    setGrid(() => buildChessBoard(board, handleAction));
  };

  const [grid, setGrid] = useState(() => buildChessBoard(board, handleAction));

  return <div className="board">{grid}</div>;
};

export default Board;

const buildChessBoard = (board: ChessBoard, action: any): Array<any> => {
  let grid: Array<any> = [];
  console.log(action);
  board.board.map((row, i: number) => {
    row.map((chessSquare: ChessSquare, j: number) => {
      chessSquare.action = { action };
      let square = <Square key={i * 8 + j} square={chessSquare} />;
      grid = [...grid, square];
    });
  });
  return grid;
};
