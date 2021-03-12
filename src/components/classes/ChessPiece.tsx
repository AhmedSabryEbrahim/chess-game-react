import { Point, PieceType, ChessColors } from "./PieceUtil";
import { MoveValidator, Direction } from "./MoveValidation";
export class PieceFactory {
  public static createPiece(
    pieceName: PieceType,
    pieceColor: ChessColors,
    moveValidator: MoveValidator
  ): ChessPiece {
    switch (pieceName) {
      case PieceType.KING:
        return new King(pieceColor, moveValidator);
      case PieceType.QUEEN:
        return new Queen(pieceColor, moveValidator);
      case PieceType.ROOK:
        return new Rook(pieceColor, moveValidator);
      case PieceType.BISHOP:
        return new Bishop(pieceColor, moveValidator);
      case PieceType.NIGHT:
        return new Night(pieceColor, moveValidator);
      case PieceType.PAWN:
        return new Pawn(pieceColor, moveValidator);
      default:
        return new Empty(moveValidator);
    }
  }
}

export abstract class ChessPiece {
  pieceName: PieceType;
  color: ChessColors;
  moveValidator: MoveValidator;
  public constructor(
    piece: PieceType,
    color: ChessColors,
    moveValidator: MoveValidator
  ) {
    this.pieceName = piece;
    this.color = color;
    this.moveValidator = moveValidator;
  }
  public isEmpty(): boolean {
    return (
      this.pieceName.indexOf(PieceType.EMPTY) >= 0 ||
      this.color.indexOf(ChessColors.EMPTY) >= 0
    );
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    return false;
  }
}

class King extends ChessPiece {
  constructor(color: ChessColors, moveValidator: MoveValidator) {
    super(PieceType.KING, color, moveValidator);
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    if (
      this.moveValidator.isValidDiagonalMove(
        curr,
        destination,
        1,
        Direction.ANY
      ) ||
      this.moveValidator.isValidHorizontalMove(
        curr,
        destination,
        1,
        Direction.ANY
      ) ||
      this.moveValidator.isValidVerticalMove(
        curr,
        destination,
        1,
        Direction.ANY
      )
    )
      return true;
    return false;
  }
}

class Queen extends ChessPiece {
  constructor(color: ChessColors, moveValidator: MoveValidator) {
    super(PieceType.QUEEN, color, moveValidator);
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    if (
      this.moveValidator.isValidDiagonalMove(
        curr,
        destination,
        7,
        Direction.ANY
      ) ||
      this.moveValidator.isValidHorizontalMove(
        curr,
        destination,
        7,
        Direction.ANY
      ) ||
      this.moveValidator.isValidVerticalMove(
        curr,
        destination,
        7,
        Direction.ANY
      )
    )
      return true;
    return super.validPieceMove(curr, destination);
  }
}

class Rook extends ChessPiece {
  constructor(color: ChessColors, moveValidator: MoveValidator) {
    super(PieceType.ROOK, color, moveValidator);
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    if (
      this.moveValidator.isValidVerticalMove(
        curr,
        destination,
        7,
        Direction.ANY
      ) ||
      this.moveValidator.isValidHorizontalMove(
        curr,
        destination,
        7,
        Direction.ANY
      )
    )
      return true;
    return super.validPieceMove(curr, destination);
  }
}

class Bishop extends ChessPiece {
  constructor(color: ChessColors, moveValidator: MoveValidator) {
    super(PieceType.BISHOP, color, moveValidator);
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    if (
      this.moveValidator.isValidDiagonalMove(
        curr,
        destination,
        7,
        Direction.ANY
      )
    )
      return true;
    return super.validPieceMove(curr, destination);
  }
}

class Night extends ChessPiece {
  constructor(color: ChessColors, moveValidator: MoveValidator) {
    super(PieceType.NIGHT, color, moveValidator);
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    if (this.moveValidator.isValidNightMove(curr, destination)) return true;
    return super.validPieceMove(curr, destination);
  }
}

class Pawn extends ChessPiece {
  constructor(color: ChessColors, moveValidator: MoveValidator) {
    super(PieceType.PAWN, color, moveValidator);
  }
  validPieceMove(curr: Point, destination: Point): boolean {
    console.log("VALIDATION -" + this.pieceName);
    let direction: Direction =
      this.color === ChessColors.WHITE ? Direction.FORWARD : Direction.BACKWARD;
    if (this.moveValidator.isValidVerticalMove(curr, destination, 2, direction))
      return true;
    return false;
  }
}

class Empty extends ChessPiece {
  constructor(moveValidator: MoveValidator) {
    super(PieceType.EMPTY, ChessColors.EMPTY, moveValidator);
  }
}
