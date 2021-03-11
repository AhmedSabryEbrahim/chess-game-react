import {Point, PieceType , ChessColors} from "./PieceUtil";
import {MoveValidator , MoveType} from "./Move";
export class PieceFactory{
  public static createPiece(pieceName: PieceType, pieceColor: ChessColors): ChessPiece{
    switch(pieceName){
      case PieceType.KING:
        return new King(pieceColor);
      case PieceType.QUEEN:
          return new Queen(pieceColor);
      case PieceType.ROOK:
        return new Rook(pieceColor);
      case PieceType.BISHOP:
          return new Bishop(pieceColor);
      case PieceType.NIGHT:
        return new Night(pieceColor); 
      case PieceType.PAWN:
          return new Pawn(pieceColor);
      default:
        return new Empty();    
    }
  }
}

export abstract class ChessPiece {
    pieceName: PieceType;
    color: ChessColors;
    public constructor(piece: PieceType , color: ChessColors){
      this.pieceName = piece;
      this.color = color;
    }
    public isEmpty(): boolean{
      return this.pieceName.indexOf(PieceType.EMPTY) >= 0 || 
             this.color.indexOf(ChessColors.EMPTY) >= 0;
    }
    validMove(curr: Point , destination: Point): boolean{
      console.log("VALIDATION PARENT-"+this.pieceName);
      return false;
    }
    public renderPiece(): any {
      return  <div className={`${this.color}piece`}>{this.pieceName}</div>;
    }
}


class King extends ChessPiece {
  constructor(color:ChessColors){
    super(PieceType.KING , color);
  }
  validMove(curr: Point , destination: Point): boolean{
    if(MoveValidator.isValidDiagonalMove(curr, destination , 1 , MoveType.ANY)||
       MoveValidator.isValidHorizontalMove(curr, destination , 1 , MoveType.ANY)||
       MoveValidator.isValidVerticalMove(curr, destination , 1 , MoveType.ANY))
       return true; 
    return false;
  }
}

class Queen extends ChessPiece {
  constructor(color:ChessColors){
    super(PieceType.QUEEN , color);
  }
  validMove(curr: Point , destination: Point): boolean{
    if(MoveValidator.isValidDiagonalMove(curr, destination , 7 , MoveType.ANY)||
       MoveValidator.isValidHorizontalMove(curr, destination , 7 , MoveType.ANY)||
       MoveValidator.isValidVerticalMove(curr, destination , 7 , MoveType.ANY))
       return true; 
    return super.validMove(curr , destination);
  }
}

class Rook extends ChessPiece {
  constructor(color:ChessColors){
    super(PieceType.ROOK , color);
  }
  validMove(curr: Point , destination: Point): boolean{
      if(MoveValidator.isValidVerticalMove(curr, destination , 7 , MoveType.ANY)||
         MoveValidator.isValidHorizontalMove(curr, destination , 7 , MoveType.ANY))
       return true; 
       return super.validMove(curr , destination);
  }
}

class Bishop extends ChessPiece {
  constructor(color:ChessColors){
    super(PieceType.BISHOP , color);
  }
  validMove(curr: Point , destination: Point): boolean{
      if( MoveValidator.isValidDiagonalMove(curr, destination , 7 , MoveType.ANY))
       return true; 
      return super.validMove(curr , destination);
  }
}


class Night extends ChessPiece {
  constructor(color:ChessColors){
    super(PieceType.NIGHT , color);
  }
  validMove(curr: Point , destination: Point): boolean{
      if( MoveValidator.isValidNightMove(curr, destination))
       return true; 
      return super.validMove(curr , destination);
  }
}


class Pawn extends ChessPiece {
  constructor(color:ChessColors){
    super(PieceType.PAWN , color);
  }
  validMove(curr: Point , destination: Point): boolean{
    console.log("VALIDATION -"+this.pieceName);
    if(MoveValidator.isValidVerticalMove(curr, destination , 2, (this.color === ChessColors.WHITE )? MoveType.FORWARD: MoveType.BACKWARD))
       return true;    
    return false;
  }
}

class Empty extends ChessPiece {
  constructor(){
    super(PieceType.EMPTY , ChessColors.EMPTY);
  }
}