import React, { useState, useContext, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/header/Header';
import { gameConfig } from './store/store';
import { GAME_STATUS, GAME_MSGS } from './constants/constant';
import { getRandomNum } from './utils/utils';
import { createGameStateAction, GAME_STATE_CHANGED } from './models/action';


const GameBoard = lazy(() => import('./components/gameboard/GameBoard'));
const DesignGame = lazy(() => import("./components/desingGame/DesignGame"));

const App = () => {
  const { visitedCells, gameStatus, dispatch } = useContext(gameConfig);
  const [msg, setMsg] = useState("Click on the New Game button to start a game");
  useEffect(() => {
    if (gameStatus === GAME_STATUS.GAME_IN_PROGRESS && visitedCells > 0) {
      setMsg(GAME_MSGS.ON_GOING_MSGS[getRandomNum(GAME_MSGS.ON_GOING_MSGS.length)]);
    }
  }, [visitedCells]);

  useEffect(() => {
    if (gameStatus === GAME_STATUS.GAME_WON)
      setMsg(GAME_MSGS.WON);
    if (gameStatus === GAME_STATUS.GAME_LOST)
      setMsg(GAME_MSGS.LOST);
    if (gameStatus === GAME_STATUS.GAME_IN_PROGRESS && visitedCells === 0)
        setMsg("Good luck!!, Make a choice.");
  }, [gameStatus])


  return (
    <div className="App">
      <Header />
      <h4 className="fadeEffect">{msg}</h4>
      {
        gameStatus === GAME_STATUS.GAME_NOT_STARTED || gameStatus === GAME_STATUS.GAME_WON || gameStatus === GAME_STATUS.GAME_LOST ? <button onClick={() => {
          if (dispatch) {
            setMsg("");
            dispatch(createGameStateAction(GAME_STATE_CHANGED, GAME_STATUS.GAME_CONFIG_STATE));
          }
        }}>New Game</button> : ""
      }
      <Suspense fallback={<div>Loading...</div>}>
        {
          gameStatus === GAME_STATUS.GAME_CONFIG_STATE ? <DesignGame /> : ""
        }
        {
          gameStatus === GAME_STATUS.GAME_IN_PROGRESS || gameStatus === GAME_STATUS.GAME_WON || gameStatus === GAME_STATUS.GAME_LOST ? <GameBoard /> : ""
        }
      </Suspense>
    </div>
  );
}

export default App;
