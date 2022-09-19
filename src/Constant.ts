export const HORIZONTAL_AXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const VERTICAL_AXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
export const GRID_SIZE = 62.5;
export function samePosittion(p1: Posiion, p2: Posiion) {
    return p1.x === p2.x && p1.y === p2.y;
}
export { }
export enum PieceType {
    PAWN,
    BISHOP,
    KNIGHT,
    ROOK,
    QUEEN,
    KING
}

export enum TeamType {
    OPPONENT,
    OUR
}
export interface Posiion {
    x: number;
    y: number;
}
export interface Piece {
    image: string;
    position: Posiion;
    type: PieceType;
    team: TeamType;
    enPassant?: boolean;
}

export const initialBoardState: Piece[] = [
    { image: `assets/rook_b.png`, position: { x: 0, y: 7 }, type: PieceType.ROOK, team: TeamType.OPPONENT },
    { image: `assets/knight_b.png`, position: { x: 1, y: 7 }, type: PieceType.KNIGHT, team: TeamType.OPPONENT },
    { image: `assets/bishop_b.png`, position: { x: 2, y: 7 }, type: PieceType.BISHOP, team: TeamType.OPPONENT },
    { image: `assets/queen_b.png`, position: { x: 3, y: 7 }, type: PieceType.QUEEN, team: TeamType.OPPONENT },
    { image: `assets/king_b.png`, position: { x: 4, y: 7 }, type: PieceType.KING, team: TeamType.OPPONENT },
    { image: `assets/bishop_b.png`, position: { x: 5, y: 7 }, type: PieceType.BISHOP, team: TeamType.OPPONENT },
    { image: `assets/knight_b.png`, position: { x: 6, y: 7 }, type: PieceType.KNIGHT, team: TeamType.OPPONENT },
    { image: `assets/rook_b.png`, position: { x: 7, y: 7 }, type: PieceType.ROOK, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 0, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 1, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 2, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 3, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 4, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 5, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 6, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },
    { image: `assets/pawn_b.png`, position: { x: 7, y: 6 }, type: PieceType.PAWN, team: TeamType.OPPONENT },



    { image: `assets/rook_w.png`, position: { x: 0, y: 0 }, type: PieceType.ROOK, team: TeamType.OUR },
    { image: `assets/knight_w.png`, position: { x: 1, y: 0 }, type: PieceType.KNIGHT, team: TeamType.OUR },
    { image: `assets/bishop_w.png`, position: { x: 2, y: 0 }, type: PieceType.BISHOP, team: TeamType.OUR },
    { image: `assets/queen_w.png`, position: { x: 3, y: 0 }, type: PieceType.QUEEN, team: TeamType.OUR },
    { image: `assets/king_w.png`, position: { x: 4, y: 0 }, type: PieceType.KING, team: TeamType.OUR },
    { image: `assets/bishop_w.png`, position: { x: 5, y: 0 }, type: PieceType.BISHOP, team: TeamType.OUR },
    { image: `assets/knight_w.png`, position: { x: 6, y: 0 }, type: PieceType.KNIGHT, team: TeamType.OUR },
    { image: `assets/rook_w.png`, position: { x: 7, y: 0 }, type: PieceType.ROOK, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 0, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 1, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 2, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 3, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 4, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 5, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 6, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
    { image: `assets/pawn_w.png`, position: { x: 7, y: 1 }, type: PieceType.PAWN, team: TeamType.OUR },
];
