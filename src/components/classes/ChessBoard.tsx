import { Point, PieceType, ChessColors } from "./PieceUtil";
import Square from "../Square";
import { PieceFactory, ChessPiece } from "./ChessPiece";
import { MoveValidator } from "./MoveValidation";

export class ChessSquare {
  piece: ChessPiece;
  color: ChessColors;
  action: any;
  selected: boolean;
  point: Point;

  constructor(
    color: ChessColors,
    point: Point,
    priece: ChessPiece,
    action: any,
    selected: boolean
  ) {
    this.color = color;
    this.point = point;

    this.selected = selected;
    this.piece = priece;
  }
}

export class ChessBoard {
  board: Array<Array<ChessSquare>>;
  moveValidator: MoveValidator;
  public constructor() {
    this.board = new Array(8).fill(new Array(8).fill(null));
    this.moveValidator = new MoveValidator(this.board);
    this.initizeBoard();
  }

  public movePieceTo(
    piece: ChessPiece,
    source: Point,
    destination: Point
  ): ChessBoard {
    this.changeToChessPiece(destination, piece);
    this.changeToChessPiece(
      source,
      PieceFactory.createPiece(
        PieceType.EMPTY,
        ChessColors.EMPTY,
        this.moveValidator
      )
    );
    return this;
  }

  public selectSquare(point: Point) {
    let row = [...this.board[point.x]];
    row[point.y].selected = true;
  }

  public unSelectSquare(point: Point) {
    let row = [...this.board[point.x]];
    row[point.y].selected = false;
  }

  private initChessSquare(square: ChessSquare) {
    let row = [...this.board[square.point.x]];
    row[square.point.y] = square;
    this.board[square.point.x] = [...row];
  }

  public getChessPiece(point: Point) {
    let row = [...this.board[point.x]];
    return row[point.y].piece;
  }
  private changeToChessPiece(point: Point, piece: ChessPiece) {
    let row = [...this.board[point.x]];
    row[point.y].piece = piece;
    this.board[point.x] = [...row];
  }
  private initizeBoard(): void {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let color = (i + j) % 2 === 0 ? ChessColors.BLACK : ChessColors.WHITE;
        let pieceColor: ChessColors =
          i < 2 ? ChessColors.BLACK : ChessColors.WHITE;
        let piece = PieceFactory.createPiece(
          PieceType.EMPTY,
          pieceColor,
          this.moveValidator
        );

        if (i === 1 || i === 6)
          piece = PieceFactory.createPiece(
            PieceType.PAWN,
            pieceColor,
            this.moveValidator
          );
        else if (i === 0 || i === 7) {
          if (j === 0)
            piece = PieceFactory.createPiece(
              PieceType.ROOK,
              pieceColor,
              this.moveValidator
            );
          else if (j === 1)
            piece = PieceFactory.createPiece(
              PieceType.NIGHT,
              pieceColor,
              this.moveValidator
            );
          else if (j === 2)
            piece = PieceFactory.createPiece(
              PieceType.BISHOP,
              pieceColor,
              this.moveValidator
            );
          else if (j === 3)
            piece = PieceFactory.createPiece(
              PieceType.QUEEN,
              pieceColor,
              this.moveValidator
            );
          else if (j === 4)
            piece = PieceFactory.createPiece(
              PieceType.KING,
              pieceColor,
              this.moveValidator
            );
          else if (j === 5)
            piece = PieceFactory.createPiece(
              PieceType.BISHOP,
              pieceColor,
              this.moveValidator
            );
          else if (j === 6)
            piece = PieceFactory.createPiece(
              PieceType.NIGHT,
              pieceColor,
              this.moveValidator
            );
          else if (j === 7)
            piece = PieceFactory.createPiece(
              PieceType.ROOK,
              pieceColor,
              this.moveValidator
            );
        }
        let point = new Point(i, j);
        let chessSquare = new ChessSquare(color, point, piece, null, false);
        this.initChessSquare(chessSquare);
      }
    }
  }
}
