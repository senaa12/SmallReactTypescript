import * as React from "react";
import "./app.scss";

export interface AppProps{
}

export interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

    }

    public render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}
