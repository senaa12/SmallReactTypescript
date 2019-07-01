import { RootReducerState } from "../reducers/rootReducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import * as React from "react";
import "./app.scss";
import { initialAction } from "../actions/app";

interface AppOwnProps{
}

interface AppStateProps{
}

interface AppDispatchProps{
    initialAction: () => void;
}

type AppProps = AppOwnProps & AppStateProps & AppDispatchProps;

export interface AppState {
}

const mapStateToProps = (state: RootReducerState, ownProps: AppOwnProps): AppStateProps => {
    return{};
}

const mapDispatchToProps = (dispatch: Dispatch): AppDispatchProps => {
    return{
        initialAction: () => dispatch(initialAction())
    };
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }

    componentDidMount(){
        this.props.initialAction();
    }

    public render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
