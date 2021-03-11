import {ChessBoard} from "./ChessBoard";
import {Point} from "./PieceUtil";
import { GameHistory } from "./GameHistory";

export class GameState {
    board: ChessBoard;
    step: number;
    selected: Point;
    history: GameHistory;
    public constructor(){
      this.board=new ChessBoard();
      this.step = 0;
      this.selected = new Point(-1 ,-1);
      this.history = new GameHistory();
    }

    public preformMove(source: Point, destination: Point): GameState {
        let piece = this.board.getChessPiece(source);
        if(piece.validMove(source , destination)){
            this.board= this.board.movePieceTo(piece, source, destination);
            this.step += 1;
            this.history.addStep(this.moveAsMessage(source, destination),this.step);
            this.unSelectSqaure();
            console.log("Moved!!");
        }
        return this;
    }

    public selectSqaure(source: Point): GameState {
        this.board.selectSquare(source);
        this.selected = source;
        return this;
    }
    public unSelectSqaure(): GameState {
        this.board.unSelectSquare(this.selected);
        this.selected = new Point(-1,-1);
        return this;
    }

    private moveAsMessage(source:Point, destination: Point): string{
        return  "(" + source.x +"," + source.y + ") => (" +destination.x +"," + destination.y +")";
    }

}