import * as React from "react";

import "./button.scss";

export interface ButtonProps {
    disabled?: boolean;
    children?: string;
    className?: string;
    onClick: () => void;
}

export default class Button extends React.Component<ButtonProps, never> {
    constructor(props: ButtonProps) {
        super(props);
    }

    private static defaultProps: Partial<ButtonProps> = {
        disabled: false,
        className: ""
    };

    private _getClassName = () => {
        let className: string = "my-button disable-selection" + this.props.className;

        className += this.props.disabled ? " is-disabled" : "";

        return className;
    }

    private _onClick = () => {
        return this.props.disabled ? () => {} : this.props.onClick;
    }

    public render(): React.ReactElement<Button> {
        return (
            <div className={this._getClassName()} onClick={this._onClick()}>
                {this.props.children}
            </div>
        );
    }
}
