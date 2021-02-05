import Config from "./config";
import { GAME_STATUS } from "../constants/constant";

interface StoreModel {
    config:Config
    dispatch?:Function
    visitedCells:number
    gameStatus:GAME_STATUS
}

export default StoreModel;