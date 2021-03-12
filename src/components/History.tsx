import React from "react";
import { ChessColors } from "./classes/PieceUtil";

const History: React.FunctionComponent<{
  history: any;
  color: ChessColors;
}> = ({ history, color }) => {
  console.log("History");
  return (
    <div className={` history ${color}history`}>
      <div className="title">{color} History</div>
      <ul>{history}</ul>
    </div>
  );
};

export default History;
