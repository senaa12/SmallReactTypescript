import * as React from "react";
import "./app.scss";

import Layer from "../components/layer/layer";
import Button from "../components/button/button";
import ActionCircle, { ActionCirlceSizeEnum } from "../components/actionCircle/actionCircle";
import Icon from "../components/icon/icon";

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
            <br /><br /><br /><br /><br />
            <Layer isOpen={this.state.portalShown} dimBackground={true}>probaaa</Layer>
            <Button onClick={this._showPortal}>Show Portal</Button>
            <ActionCircle label="Success" shouldShow={true} size={ActionCirlceSizeEnum.Small}/>
            <Icon iconName={"svg-checkmark"}/>
            </>
        );
    }
}
