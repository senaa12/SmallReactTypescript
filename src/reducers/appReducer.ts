import { Action } from "../model/appStructures";
import { AppActions } from "../actions/app";

export interface AppReducerState {
    initialized: string;
};

const initialAppReducerState: AppReducerState = {
    initialized: ''
};

export default function appReducer(state: AppReducerState = initialAppReducerState, action: Action): AppReducerState {
    switch(action.type) {
        case AppActions.InitialAction: {
            return {
                ...state,
                initialized: 'initialized'
            };
        }
        default: {
            return {...state};
        }
    }
}


