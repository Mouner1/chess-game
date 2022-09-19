import { Piece, Posiion, samePosittion, TeamType } from "../../Constant";
export { }
export const tileIsOccupied = (position: Posiion, boardState: Piece[]): boolean => {

    const piece = boardState.find(p => samePosittion(p.position, position));

    if (piece) {
        return true;
    } else {
        return false;
    }
}

export const TileIsOccupiedByOpponent = (position: Posiion, boardState: Piece[], team: TeamType): boolean => {

    const piece = boardState.find(p => samePosittion(p.position, position) && p.team !== team);
    if (piece) {
        return true;
    } else {
        return false;
    }
}

export const tileIsEmptyOrOccupiedByOpponent = (position: Posiion, boardState: Piece[], team: TeamType) => {
    return !tileIsOccupied(position, boardState) || TileIsOccupiedByOpponent(position, boardState, team);
}