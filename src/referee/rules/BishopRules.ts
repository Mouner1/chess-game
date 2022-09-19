import { Piece, Posiion, samePosittion, TeamType } from "../../Constant";
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from "./GeneralRules";
export { }
export const bishopMove = (initialPosition: Posiion, desiredPosition: Posiion, team: TeamType, boardState: Piece[]): boolean => {

    for (let i = 1; i < 8; i++) {
        //TOP right 
        if (desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y) {

            let passedPosition: Posiion = { x: initialPosition.x + i, y: initialPosition.y + i };

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
        //BOTTOM RIGHT
        if (desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y) {

            let passedPosition: Posiion = { x: initialPosition.x + i, y: initialPosition.y - i };
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
        //bottom left
        if (desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y) {

            let passedPosition: Posiion = { x: initialPosition.x - i, y: initialPosition.y - i };
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
        //top left 
        if (desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y) {

            let passedPosition: Posiion = { x: initialPosition.x - i, y: initialPosition.y + i };
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