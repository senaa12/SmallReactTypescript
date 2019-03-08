import * as React from "react";
import * as ReactDOM from "react-dom";

import "./layer.scss";

export interface LayerProps {
    children?: React.ReactNode;
    isOpen: boolean;
    dimBackground?: boolean;
}

export interface LayerState {
    portal: React.ReactPortal;
}

export default class Layer extends React.Component<LayerProps, LayerState> {
    constructor(props: LayerProps){
        super(props);
        this.state = {
            portal: props.isOpen ? ReactDOM.createPortal(<div className={this._getClassName()}>{this.props.children}</div>, document.body) : null
        }
    }

    private static defaultProps: Partial<LayerProps> = {
        dimBackground: false
    }

    private _getClassName = () => {
        let className: string = "my-layer";

        className += this.props.dimBackground ? " dim-background" : "";

        return className;
    }

    public componentDidUpdate(prevProps: LayerProps){
        if(prevProps.isOpen !== this.props.isOpen){
            this.setState({ portal : this.props.isOpen ? ReactDOM.createPortal(<div className={this._getClassName()}>{this.props.children}</div>, document.body) : null });
        }
    }

    public render(): any {
        return this.state.portal;
    }
}