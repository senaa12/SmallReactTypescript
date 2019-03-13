import * as React from "react";

import "./actionCircle.scss";

export enum ActionCirlceSizeEnum {
    Small,
    Medium,
    Big
}

export interface ActionCircleProps {
    shouldShow: boolean;
    label: string;
    children?: React.ReactNode;
    size: ActionCirlceSizeEnum;
}

export default class ActionCircle extends React.Component<ActionCircleProps, never> {
    constructor(props: ActionCircleProps) {
        super(props);
        this._setActionCircleSize();
    }

    private wrapperSize: React.CSSProperties = null;
    private circleBorder: React.CSSProperties = null;
    private _setActionCircleSize = () => {
        switch (this.props.size) {
        case ActionCirlceSizeEnum.Big: {
            this.wrapperSize = {
                height: "100px",
                width: "100px"
            };
            this.circleBorder = {
                border: "10px solid"
            };
            break;
        }
        case ActionCirlceSizeEnum.Medium: {
            this.wrapperSize = {
                height: "50px",
                width: "50px"
            };
            this.circleBorder = {
                border: "5px solid"
            };
            break;
        }
        case ActionCirlceSizeEnum.Small: {
            this.wrapperSize = {
                height: "20px",
                width: "20px"
            };
            this.circleBorder = {
                border: "2px solid"
            };
            break;
        }
        }
    }

    public render(): React.ReactElement<ActionCircleProps> {
        // FOR NOW THIS ELEMENT WILL SHOW AND THEN FADE
        return (<>
            {this.props.shouldShow && this.circleBorder &&
            <div className="loading-circle">
            <div className="wrapper" data-anim="base wrapper" style={this.wrapperSize} >
                <div className="circle" data-anim="base left" style={this.circleBorder} />
                <div className="circle" data-anim="base right" style={this.circleBorder} />
                <div className="rectangle-hide" />
                {/* CONTENT CAN GO HERE, THIS HAS ROOM FOR IMPROVEMENT, JUST NEED TO SET CSS */}
            </div>
            <div className="checkmark-label">{this.props.label}</div>
            </div> }
        </>
        );
    }
}
