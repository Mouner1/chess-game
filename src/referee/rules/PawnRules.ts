import { Piece, Posiion, TeamType } from "../../Constant";
import { tileIsOccupied, TileIsOccupiedByOpponent } from "./GeneralRules";

export const pawnMove = (initialPosition: Posiion, desiredPosition: Posiion, team: TeamType, boardState: Piece[]): boolean => {
    const specialRow = (team === TeamType.OUR) ? 1 : 6;
    const pawnDirection = (team === TeamType.OUR) ? 1 : -1;

    if (initialPosition.x === desiredPosition.x && initialPosition.y === specialRow && desiredPosition.y - initialPosition.y === 2 * pawnDirection) {
        if (!tileIsOccupied(desiredPosition, boardState) && !tileIsOccupied({ x: desiredPosition.x, y: desiredPosition.y - pawnDirection }, boardState)) {
            return true;
        }
    } else if (initialPosition.x === desiredPosition.x && desiredPosition.y - initialPosition.y === pawnDirection) {
        if (!tileIsOccupied(desiredPosition, boardState)) {
            return true;
        }
    }
    //attack logic
    else if (desiredPosition.x - initialPosition.x === -1 && desiredPosition.y - initialPosition.y === pawnDirection) { //attack in upper or bottom left corners

        if (TileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
            return true;
        }
    } else if (desiredPosition.x - initialPosition.x === 1 && desiredPosition.y - initialPosition.y === pawnDirection) { //attack in upper or bottom right corner
        if (TileIsOccupiedByOpponent(desiredPosition, boardState, team)) {
            return true;
        }
    }
    return false;
}