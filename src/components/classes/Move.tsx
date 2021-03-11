
import {Point} from "./PieceUtil";

export enum MoveType{
    FORWARD,
    BACKWARD,
    ANY
}

export class MoveValidator {
    private static validPoint(point:Point){
        return point.x < 0 || point.x > 7|| point.y < 0 || point.y > 7;
    }
    private static getDistance(source:Point, destination:Point): Point{
        return new Point(source.x - destination.x, source.y - destination.y);
    }
    public static isValidVerticalMove(source:Point, destination:Point, max: number, direction: MoveType): boolean{
        if(MoveValidator.validPoint(source)||MoveValidator.validPoint(destination))return false;
        let distance: Point = MoveValidator.getDistance(source, destination);
        if(distance.y !== 0 || distance.x === 0) return false;
        else if(distance.x < 0 &&  direction === MoveType.FORWARD) return false;
        else if(distance.x> 0 &&  direction === MoveType.BACKWARD) return false;
        else if(Math.abs(distance.x) > max) return false;
        return true;
    }
    public static isValidHorizontalMove(source:Point, destination:Point, max: number, direction: number): boolean{
        if(MoveValidator.validPoint(source)||MoveValidator.validPoint(destination))return false;
        let distance: Point = MoveValidator.getDistance(source, destination);
        if(distance.x !== 0 || distance.y === 0) return false;
        else if(distance.y < 0 &&  direction === MoveType.FORWARD) return false;
        else if(distance.y > 0 &&  direction === MoveType.BACKWARD) return false;
        else if(Math.abs(distance.y) > max) return false;
        return true;
    }
    public static isValidDiagonalMove(source:Point, destination:Point, max: number, direction: number): boolean{
        if(MoveValidator.validPoint(source)||MoveValidator.validPoint(destination))return false;
        let distance: Point = MoveValidator.getDistance(source, destination);
        if(distance.y === 0 || distance.x === 0) return false;
        else if (Math.abs(distance.y) !== Math.abs(distance.x)) return false;
        else if(Math.abs(distance.x) > max || Math.abs(distance.y) > max) return false;
        return true;
    }
    public static isValidNightMove(source:Point, destination:Point): boolean{
        if(MoveValidator.validPoint(source)||MoveValidator.validPoint(destination))return false;
        let distance: Point = MoveValidator.getDistance(source, destination);
        if(Math.abs(distance.x) === 1 &&Math.abs(distance.y) === 3)return true;
        else if(Math.abs(distance.x) === 3 &&Math.abs(distance.y) === 1)return true;
        return false;
    }
}

