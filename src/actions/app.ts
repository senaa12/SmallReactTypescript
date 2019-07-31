import { RootReducerState } from "../reducers/rootReducer";

export enum AppActions {
    InitialAction = "@App/Initial_Action"
}

export const initialAction = (): any => {
    return (dispatch: any, getState:() => RootReducerState) => {
        return dispatch({
            type: AppActions.InitialAction,
            payload: "test action"
        });
    };
};
