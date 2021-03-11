export enum PieceType {
    KING= "K",
    QUEEN= "Q",
    ROOK= "R",
    NIGHT= "N",
    BISHOP= "B",
    PAWN= "P",
    EMPTY= "",
  }
  export enum ChessColors {
    BLACK = "black",
    WHITE = "white",
    EMPTY= ""
  }
  
  
  export class Point{
      x: number = -1;
      y: number = -1;
      public constructor(_x: number,_y: number){
        this.x= _x;
        this.y= _y;
      }
      public isValidPoint():boolean{
        return (this.x >= 0 && this.x <= 7) && (this.y >= 0 && this.y <= 7) ;
      }
  }