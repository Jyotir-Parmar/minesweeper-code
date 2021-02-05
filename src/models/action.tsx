interface GameActionPayload {
    type: string
    payload: any
}

const VISITED_CELL = "VISITED_CELL";
const GAME_STATE_CHANGED = "GAME_STATE_CHANGED";
const CHOOSE_GRID = "CHOOSE_GRID"

const createGameStateAction = (type: string, payload:any): GameActionPayload => {
    return { type: type, payload: payload }
}

export default GameActionPayload;
export { VISITED_CELL, GAME_STATE_CHANGED, createGameStateAction, CHOOSE_GRID }