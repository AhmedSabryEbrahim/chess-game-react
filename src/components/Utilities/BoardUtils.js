import React from "react";
import Square from "../Square";

export function renderBoard(board, onClick) {
  let list = [];
  board.map((row, i) => {
    row.map((tile, j) => {
      let index = i * 8 + j;
      let color = (i + j) % 2 === 0 ? "black" : "white";
      let square = (
        <Square
          key={index}
          squareColor={color}
          value={tile}
          onClick={() => onClick({ x: i, y: j })}
        />
      );
      list = [...list, square];
    });
  });
  return list;
}

export function initizeBoard() {
  let board = new Array(8).fill(new Array(8).fill(null));
  board[1] = new Array(8).fill("B,P");
  board[6] = new Array(8).fill("W,P");
  board[0] = ["B,R", "B,N", "B,B", "B,Q", "B,K", "B,B", "B,N", "B,R"];
  board[7] = ["W,R", "W,N", "W,B", "W,Q", "W,K", "W,B", "W,N", "W,R"];

  return board;
}
