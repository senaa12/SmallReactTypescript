import createReducers, { RootReducerState } from "./rootReducer";
import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import { Action } from "../model/appStructures";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import appSettings from "../utils/appSettings";

export default function configureStore(
    initialState: Partial<RootReducerState>,
    history: any
): Store<RootReducerState> {
    const store: Store<RootReducerState> = createStore<RootReducerState, any, any, any>(
        createReducers(history),
        initialState,
        composeWithDevTools(applyMiddleware(...getMiddelware(history)))
    );

    return store;
}

const getMiddelware: any = (history: any) => {
    const logger: any = createLogger({
        predicate: (getState: () => RootReducerState, action: Action) => {
            switch (action.type) {
            case "@@router/LOCATION_CHANGE":
                return false;
            default:
                return appSettings.isDevelopment;
            }
        },
        diff: true
    });

    const middleware: any = [thunk, logger, routerMiddleware(history)];
    return middleware;
};
