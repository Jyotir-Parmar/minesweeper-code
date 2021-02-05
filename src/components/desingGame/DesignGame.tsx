import React, { useContext, useState, useEffect, Fragment, useRef } from 'react';
import { gameConfig } from '../../store/store';
import './DesignGame.css';
import Config from '../../models/config';
import getGameConfigByDificulty, { Difficulty, GAME_STATUS, ERROR, MAX_DIM_LENGTH } from '../../constants/constant';
import { createGameStateAction, CHOOSE_GRID, GAME_STATE_CHANGED } from '../../models/action';

const DesignGame = () => {
    const [config, setConfig] = useState<Config>(getGameConfigByDificulty(Difficulty.Easy));
    const [difficulty, setDificulty] = useState(Difficulty.Easy);
    const levelRef = useRef(Difficulty.Easy);
    const { dispatch } = useContext(gameConfig);

    useEffect(() => {
        setDificulty(levelRef.current);
    }, [config])


    const onSelection = (level: Difficulty) => {
        setConfig(getGameConfigByDificulty(level));
        levelRef.current = level;
    }

    const updateCustomChange = (event: any, type: string, dim = "", value: number) => {
        const tempConfig = { ...config };
        if (type === "grid") {
            dim === "m" ? tempConfig.gridSize.m = value : tempConfig.gridSize.n = value
        } else {
            tempConfig.bombInTheGame = value;
        }
        setConfig(tempConfig);
    }

    const startGame = () => {
        if (config.gridSize.m * config.gridSize.n <= config.bombInTheGame) {
            alert(ERROR.MORE_BOMBS);
            return;
        }
        if (config.bombInTheGame < 1) {
            alert(ERROR.LESS_BOMS);
            return;
        }
        if (config.gridSize.m * config.gridSize.n < 2) {
            alert(ERROR.GRID_ERROR);
            return;
        }
        if (config.gridSize.m > MAX_DIM_LENGTH || config.gridSize.n > MAX_DIM_LENGTH) {
            alert(ERROR.MAX_DIM);
            return;
        }
        if (dispatch) {
            dispatch(createGameStateAction(CHOOSE_GRID, config));
            dispatch(createGameStateAction(GAME_STATE_CHANGED, GAME_STATUS.GAME_IN_PROGRESS));
        }
    }

    return <section className="designGame fadeEffect">
        <div className="designGame-form">
            <h3 className="margin-top-20">Please select the difficulty level:</h3>
            <div className="margin-top-20">
                <input type="radio" id="easy" name="difficulty" value="easy" onChange={() => onSelection(Difficulty.Easy)} defaultChecked={true} />
                <label htmlFor="easy">Easy ( 5 * 5 grid with 5 bombs )</label>
            </div>
            <div className="margin-top-20">
                <input type="radio" id="medium" name="difficulty" value="medium" onChange={() => onSelection(Difficulty.Medium)} />
                <label htmlFor="medium">Medium ( 10 * 10 grid with 20 bombs )</label></div>
            <div className="margin-top-20">
                <input type="radio" id="hard" name="difficulty" value="hard" onChange={() => onSelection(Difficulty.Hard)} />
                <label htmlFor="hard">Hard ( 15 * 15 grid with 45 bombs )</label>
            </div>
            <div className="designGame-form-custom margin-top-20">
                <div className="margin-top-20">
                    <input type="radio" id="custom" name="difficulty" value="custom" onChange={() => onSelection(Difficulty.Custom)} />
                    <label htmlFor="custom">Customise Your Game ( Maximum {MAX_DIM_LENGTH} row or column allowed )</label>
                </div>
                {
                    difficulty === Difficulty.Custom ? <Fragment> <div className="margin-top-20">
                        <label className="designGame-form--label">Enter Grid Size : </label>
                        <input className="designGame-form-custom--input" type="number"
                            name="custom" min="0" defaultValue={config.gridSize.m} placeholder="Enter Row Size" onChange={(event) => updateCustomChange(event, "grid", "m", Number(event.target.value))} />
                        x
                    <input className="designGame-form-custom--input" type="number"
                            name="customN" min="0" defaultValue={config.gridSize.n} placeholder="Enter Column Size" onChange={(event) => updateCustomChange(event, "grid", "n", Number(event.target.value))} />
                    </div>
                        <div className="margin-top-20">
                            <label className="designGame-form--label">Enter Bombs In the Game : </label>
                            <input className="designGame-form-custom--input" type="number"
                                name="custom" min="0" defaultValue={config.bombInTheGame} placeholder="Enter Bombs" onChange={(event) => updateCustomChange(event, "bomb", "", Number(event.target.value))} />
                        </div>
                    </Fragment> : ""
                }


            </div>
            <button className="margin-top-20" type="submit" value="Start Game" onClick={() => { startGame() }}>Start Game</button>
        </div>
    </section>
}

export default DesignGame;