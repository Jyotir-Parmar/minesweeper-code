import Config from "../models/config";
import getGameConfigByDificulty, { Difficulty, GAME_STATUS } from "../constants/constant";
import StoreModel from "../models/store";

const shuffleGrid = (grid: number[], bombInTheGame: number) => {
    while (bombInTheGame) {
        const randomIndex: number = getRandomNum(grid.length);
        if (grid[randomIndex] !== -1) {
            grid[randomIndex] = -1;
            bombInTheGame--;
        }
    }
    return grid;
}

export const getRandomNum = (length:number)=>{
    return (Math.floor(Math.random() * length));
}

const getInitialGameBoard = (config: Config) => {
    const totalCells = config.gridSize.m * config.gridSize.n;
    const totalCellsArr: number[] = new Array(totalCells).fill(0);
    const gridCells = shuffleGrid(totalCellsArr, config.bombInTheGame);

    const grid = [];
    let scan = 0;
    for (let rowIndex = 0; rowIndex < config.gridSize.m; rowIndex++) {
        const row = [];
        for (let index = 0; index < config.gridSize.n; index++) {
            const cell = gridCells[scan++];
            row.push(cell);
        }
        grid.push(row);
    }
    return grid;
}

export const countBombsNearCells = (grid: any) => {
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        const row = grid[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            let totalBombs = 0;
            if (grid[rowIndex][colIndex] !== -1) {
                if (colIndex - 1 >= 0 && grid[rowIndex][colIndex - 1] === -1) // Left cell
                    totalBombs++;
                if (colIndex + 1 < row.length && grid[rowIndex][colIndex + 1] === -1) // Right cell
                    totalBombs++;
                if (rowIndex + 1 < grid.length && grid[rowIndex + 1][colIndex] === -1) // Bottom cell
                    totalBombs++;
                if (rowIndex - 1 >= 0 && grid[rowIndex - 1][colIndex] === -1) // Top cell
                    totalBombs++;
                if (rowIndex - 1 >= 0 && colIndex - 1 >= 0 && grid[rowIndex - 1][colIndex - 1] === -1) // Top left cell
                    totalBombs++;
                if (rowIndex - 1 >= 0 && colIndex + 1 < row.length && grid[rowIndex - 1][colIndex + 1] === -1) // Top right cell
                    totalBombs++;
                if (rowIndex + 1 < grid.length && colIndex - 1 >= 0 && grid[rowIndex + 1][colIndex - 1] === -1) // Bottom left cell
                    totalBombs++;
                if (rowIndex + 1 < grid.length && colIndex + 1 < row.length && grid[rowIndex + 1][colIndex + 1] === -1) // Bottom left cell
                    totalBombs++;
                grid[rowIndex][colIndex] = totalBombs;
            }
        }
    }
    return grid;
}

export const initialState = getGameConfigByDificulty(Difficulty.Easy);
export const getinitialState = ():StoreModel => {
    return { config: { ...initialState }, visitedCells: 0, gameStatus: GAME_STATUS.GAME_NOT_STARTED };
}

export default getInitialGameBoard;