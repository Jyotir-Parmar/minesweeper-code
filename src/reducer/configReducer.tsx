import GameActionPayload, { VISITED_CELL, GAME_STATE_CHANGED, CHOOSE_GRID } from "../models/action";
import { getinitialState } from "../utils/utils";
import StoreModel from "../models/store";

const configReducer = (state: StoreModel = getinitialState(), action: GameActionPayload): StoreModel => {
    switch (action.type) {
        case VISITED_CELL:
            state = { ...state };
            state.visitedCells = state.visitedCells + 1;
            break;
        case GAME_STATE_CHANGED:
            state = { ...state };
            state.gameStatus = action.payload;
            break;
        case CHOOSE_GRID:
            state = { ...state };
            state.config = action.payload;
            state.visitedCells = 0;
            break;
    }
    return state;
}

export default configReducer;