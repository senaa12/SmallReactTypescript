import createReducers, { RootReducerState } from "../reducers/rootReducer";
import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Action } from "../model/appStructures";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import appSettings from "../utils/appSettings";

export default function configureStore(initialState: Partial<RootReducerState>): Store<RootReducerState> {
    const store: Store<RootReducerState> = createStore<RootReducerState, any, any, any>(
        createReducers(),
        initialState,
        composeWithDevTools(applyMiddleware(...getMiddelware()))
    )

    return store;
}

const getMiddelware: any = () => {
    const logger: any = createLogger({
        predicate: (getState: () => RootReducerState, action: Action) => {
            switch(action.type) {
                default: 
                    return appSettings.isDevelopment;
            }
        },
        diff: true
    })

    const middleware: any = [thunk, logger];
    return middleware;
}