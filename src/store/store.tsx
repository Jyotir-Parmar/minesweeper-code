import React, { createContext, useReducer } from 'react';
import configReducer from '../reducer/configReducer';
import StoreModel from '../models/store';
import { getinitialState } from '../utils/utils';

const storeModel: StoreModel = getinitialState();
const gameConfig = createContext({ ...storeModel });
const { Provider } = gameConfig;

const GameConfigContainer = ({ children }: any) => {
    const [state, dispatch] = useReducer(configReducer, storeModel);
    return <Provider value={ { config: state.config, dispatch: dispatch, visitedCells: state.visitedCells, gameStatus: state.gameStatus } }>{children}</Provider>;
}

export { gameConfig, GameConfigContainer };