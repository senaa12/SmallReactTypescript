import { combineReducers } from 'redux';

import appReducer, { AppReducerState } from "./appReducer";

export interface RootReducerState {
    app: AppReducerState;   
};

export default function createReducers() {
    const reducers = {
        app: appReducer
    };

    return combineReducers<RootReducerState>(reducers);
}