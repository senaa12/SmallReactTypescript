import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import appReducer, { AppReducerState } from "../reducers/appReducer";

export interface RootReducerState {
    app: AppReducerState;
}

export default function createReducers(history: any) {
    const reducers = {
        router: connectRouter(history),
        app: appReducer
    };

    return combineReducers<RootReducerState>(reducers);
}
