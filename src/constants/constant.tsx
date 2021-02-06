import Config from '../models/config';

enum GAME_STATUS {
    GAME_NOT_STARTED = "GAME_NOT_STARTED",
    GAME_CONFIG_STATE = "GAME_CONFIG_STATE",
    GAME_IN_PROGRESS = "GAME_IN_PROGRESS",
    GAME_LOST = "GAME_LOST",
    GAME_WON = "GAME_WON"
}

enum Difficulty {
    Easy = 1,
    Medium,
    Hard,
    Custom
}

const GAME_MSGS = {
    GREAT_MOVE: "Great choice. You can select any adjacent cell.",
    ON_GOING_MSGS: ["Keep going. You are almost there.", "Nice choice.", "Be careful on your choice.", "You were lucky"],
    WON: "Congratulation, you have won the game. Try more difficult level.",
    LOST: "Hard luck. You lost the game. Keep clicking on the cells to know remaining bombs or click on the New Game button to try again."
}

const getGameConfigByDificulty = (level: Difficulty = Difficulty.Easy): Config => {
    let config: Config = {
        gridSize: {
            m: 5,
            n: 5
        },
        bombInTheGame: 5
    };

    switch (level) {
        case Difficulty.Medium:
            config = {
                gridSize: {
                    m: 10,
                    n: 10
                },
                bombInTheGame: 20
            };
            break;

        case Difficulty.Hard:
            config = {
                gridSize: {
                    m: 15,
                    n: 15
                },
                bombInTheGame: 45
            };
            break;
        case Difficulty.Custom:
            config = {
                gridSize: {
                    m: 10,
                    n: 10
                },
                bombInTheGame: 20
            };
            break;
    }
    return config;
}

export const MAX_DIM_LENGTH = 30;

export const ERROR = {
    MORE_BOMBS : "Invalid Game Board. Number of bombs can not be more than or equal to cells",
    LESS_BOMS: "Invalid Game Board. There should be atleast 1 bomb in the board.",
    GRID_ERROR: "Invalid Game Board. There should be atleast 2 cells in the board.",
    MAX_DIM: `Invalid Game Board. You can choose maximum ${MAX_DIM_LENGTH} row or column`
} 



export default getGameConfigByDificulty;

export { GAME_STATUS, Difficulty, GAME_MSGS };