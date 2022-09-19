import { Piece, Posiion, samePosittion, TeamType } from "../../Constant";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from "./GeneralRules";
export { }
export const rookMove = (initialPosition: Posiion, desiredPosition: Posiion, team: TeamType, boardState: Piece[]): boolean => {

    if (initialPosition.x === desiredPosition.x) {

        for (let i = 1; i < 8; i++) {

            let multiplier = (desiredPosition.y < initialPosition.y) ? -1 : 1;
            let passedPosition: Posiion = { x: initialPosition.x, y: initialPosition.y + (i * multiplier) };
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
    }
    if (initialPosition.y === desiredPosition.y) {
        for (let i = 1; i < 8; i++) {

            let multiplier = (desiredPosition.x < initialPosition.x) ? -1 : 1;
            let passedPosition: Posiion = { x: initialPosition.x + (i * multiplier), y: initialPosition.y };
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
    }
    return false;
}