import { Piece, Posiion, samePosittion, TeamType } from "../../Constant";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from "./GeneralRules";

export const queenMove = (initialPosition: Posiion, desiredPosition: Posiion, team: TeamType, boardState: Piece[]): boolean => {

    for (let i = 1; i < 8; i++) {
        //Diagonal 

        let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0;
        let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0;
        let passedPosition: Posiion = { x: initialPosition.x + (i * multiplierX), y: initialPosition.y + (i * multiplierY) };
        if (samePosittion(passedPosition, desiredPosition)) {
            if (tileIsEmptyOrOccupiedByOpponent(passedPosition, boardState, team)) {
                return true;
            }
        } else {
            if (tileIsOccupied(passedPosition, boardState)) {
                break;
            }
        }
    }
    return false;
}