import * as React from "react";
import * as ReactDOM from "react-dom";

import "./layer.scss";

export interface LayerProps {
    children?: React.ReactNode;
    isOpen: boolean;
}

export interface LayerState {
    portal: React.ReactPortal;
}

export default class Layer extends React.Component<LayerProps, LayerState> {
    constructor(props: LayerProps){
        super(props);
        this.state = {
            portal: props.isOpen ? ReactDOM.createPortal(<div>{this.props.children}</div>, document.body) : null
        }
    }

    public componentDidUpdate(prevProps: LayerProps){
        if(prevProps.isOpen !== this.props.isOpen){
            this.setState({ portal : this.props.isOpen ? ReactDOM.createPortal(<div>{this.props.children}</div>, document.body) : null });
        }
    }

    public render(): any {
        return this.state.portal;
    }
}