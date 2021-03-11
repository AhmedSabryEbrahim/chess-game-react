import {Point ,PieceType , ChessColors} from "./PieceUtil";
import {ChessPiece} from "./ChessPiece";
import Square from "../Square";
import Piece from "../Piece";
import {PieceFactory} from "./ChessPiece";

export class ChessSquare {
  piece: ChessPiece;
  color: ChessColors;
  action: any;
  selected: boolean
  point: Point

  constructor(color: ChessColors,point: Point , priece: ChessPiece , action: any, selected: boolean){
    this.color = color;
    this.point = point;

    this.selected = selected;
    this.piece = priece;
  }
}


export class ChessBoard {
    board: Array<Array<ChessSquare>>;
    public constructor(){
      this.board = new Array(8).fill(new Array(8).fill(null));
      this.initizeBoard();
    }

  public movePieceTo(piece: ChessPiece,source: Point, destination: Point): ChessBoard{
        this.changeToChessPiece(destination,piece);
        this.changeToChessPiece(source, PieceFactory.createPiece(PieceType.EMPTY,ChessColors.EMPTY));
        return this;
    }

  public selectSquare(point: Point){
      let row = [...this.board[point.x]];
      row[point.y].selected = true;
    }

  public unSelectSquare(point: Point){
      let row = [...this.board[point.x]];
      row[point.y].selected = false;
    }

  private initChessSquare(square: ChessSquare) {
      let row = [...this.board[square.point.x]];
      row[square.point.y] = square;
      this.board[square.point.x] = [...row];
  }


  public renderBoard(action: Function): Array<any> {
    let grid: Array<any> = [];

    this.board.map((row: Array<ChessSquare>, i: number) => {
      row.map((chessSquare: ChessSquare, j: number) => {
        chessSquare.action = {action};
        let square = <Square
            key={i*8 + j}
            square={chessSquare}
          />
        grid = [...grid, square];
      });
    });
    return grid;
  }

    public getChessPiece(point: Point) {
      let row = [...this.board[point.x]];
      return row[point.y].piece;
    }
    private changeToChessPiece(point: Point,piece: ChessPiece) {
        let row = [...this.board[point.x]];
        row[point.y].piece = piece;
        this.board[point.x] = [...row];
    }
    private initizeBoard(): void{
        for(let i=0;i<8;i++){
          for(let j=0;j<8;j++){
              let color = (i + j) % 2 === 0 ? ChessColors.BLACK : ChessColors.WHITE;
              let pieceColor: ChessColors = i < 2 ?ChessColors.BLACK : ChessColors.WHITE;
              let piece = PieceFactory.createPiece(PieceType.EMPTY ,pieceColor);
              
              if(i === 1|| i=== 6)
                 piece = PieceFactory.createPiece(PieceType.PAWN , pieceColor);
              else if(i===0 || i===7){
                if(j===0) piece = PieceFactory.createPiece(PieceType.ROOK , pieceColor);
                else if(j===1) piece = PieceFactory.createPiece(PieceType.NIGHT , pieceColor);
                else if(j===2) piece = PieceFactory.createPiece(PieceType.BISHOP , pieceColor);
                else if(j===3) piece = PieceFactory.createPiece(PieceType.QUEEN , pieceColor);
                else if(j===4) piece = PieceFactory.createPiece(PieceType.KING , pieceColor);
                else if(j===5) piece = PieceFactory.createPiece(PieceType.BISHOP , pieceColor);
                else if(j===6) piece = PieceFactory.createPiece(PieceType.NIGHT , pieceColor);
                else if(j===7) piece = PieceFactory.createPiece(PieceType.ROOK , pieceColor);
              }
              let point = new Point(i,j);
              let chessSquare = new ChessSquare(color,point,piece,null,false);
              this.initChessSquare(chessSquare);
            }
        }
    }

}