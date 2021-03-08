import Square from "../Square";
export function renderBoard(board: Array<Array<any>>, action: any): any {
  let grid: Array<any> = [];
  board.map((row: Array<any>, i: any) => {
    row.map((tile: any, j: any) => {
      let index = i * 8 + j;
      let color = (i + j) % 2 === 0 ? "black" : "white";
      let square = (
        <Square
          key={index}
          color={color}
          content={tile}
          action={() => action({ x: i, y: j })}
        />
      );
      grid = [...grid, square];
    });
  });
  return grid;
}

export function renderHistory(history: Array<any>): any {
  let historyList: any = [];
  if (history.length > 0)
    historyList = history.map((item: string, key: number) => (
      <li key={key}>{item}</li>
    ));
  return historyList;
}
