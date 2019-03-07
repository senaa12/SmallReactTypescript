import * as React from "react";
import './app.scss';

import Layer from "../components/layer/layer";

export interface AppProps{

}

export interface AppState {
    portalShown: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            portalShown: false
        };
    }

    private _showPortal = () => {
        this.setState({ portalShown: !this.state.portalShown });
    }

    public render() {
        return (
            <>
            <Layer isOpen={this.state.portalShown}>probaaa</Layer>
            <button onClick={this._showPortal}>show</button>
            </>
        );
    }
}