export enum PieceType {
  KING = "K",
  Queen = "Q",
  ROOK = "R",
  NIGHT = "N",
  BISHOP = "B",
  PAWN = "P",
  EMPTY = "",
}
export enum ChessColors {
  BLACK = "black",
  WHITE = "white",
}

export interface ChessPiece {
  piece: PieceType;
  color: ChessColors;
}

export interface ChessSquare {
  content: string;
  color: string;
  action: any;
}
