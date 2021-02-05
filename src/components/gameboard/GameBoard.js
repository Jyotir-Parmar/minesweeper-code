import React, { useContext, useState, memo, useEffect } from 'react';
import './GameBoard.css';
import { gameConfig } from '../../store/store';
import getInitialGameBoard, { countBombsNearCells } from '../../utils/utils';
import Cell from '../cell/Cell';
import { GAME_STATE_CHANGED, VISITED_CELL, createGameStateAction } from '../../models/action';
import { GAME_STATUS } from '../../constants/constant';

const GameBoard = memo(() => {
    const [grid, setGame] = useState([]);
    const { config, dispatch, visitedCells } = useContext(gameConfig);

    console.log(config, " ", visitedCells, " ", dispatch);

    useEffect(() => {
        const newGrid = countBombsNearCells(getInitialGameBoard(config))
        setGame(newGrid);
    }, []);

    useEffect(() => {
        if (visitedCells === config.gridSize.m * config.gridSize.n) {
            dispatch(createGameStateAction(GAME_STATE_CHANGED, GAME_STATUS.GAME_WON));
        }
    }, [visitedCells]);

    const processVisitedCell = (cell) => {
        console.log("processVisitedCell");
        if (cell === -1) { //Lost the game
            dispatch(createGameStateAction(GAME_STATE_CHANGED, GAME_STATUS.GAME_LOST));
            return;
        }
        dispatch(createGameStateAction(VISITED_CELL, null));
    }

    return <section className="gameBoard margin-top-20 fadeEffect">
        {
            grid.map((row, index) => {
                return <div className="gameBoard-row" key={index}>
                    {row.map((cell, cellIndex) => {
                        return <Cell cell={cell} callback={processVisitedCell} rowIndex={index} colIndex={cellIndex} key={`${index}_${cellIndex}`} />
                    })}
                </div>
            })
        }

    </section>
})

export default GameBoard;