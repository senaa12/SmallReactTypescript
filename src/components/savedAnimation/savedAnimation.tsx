import * as React from "react";

import "./savedAnimation.scss";
import Icon, { IconSizeEnum } from "../icon/icon";

export enum SavedAnimationSize {
    Small,
    Medium
}

export interface SavedAnimationProps {
    size?: SavedAnimationSize;
    shouldShow: boolean;
}

export default class SavedAnimation extends React.Component<SavedAnimationProps, never> {
    constructor(props: SavedAnimationProps) {
        super(props);
        this.setActionCircleSize();
    }

    private wrapperSize: React.CSSProperties = null;
    private circleBorder: React.CSSProperties = null;
    private setActionCircleSize = () => {
        switch (this.props.size) {
        case SavedAnimationSize.Medium: {
            this.wrapperSize = {
                height: "50px",
                width: "50px"
            };
            this.circleBorder = {
                border: "5px solid"
            };
            break;
        }
        case SavedAnimationSize.Small: {
            this.wrapperSize = {
                height: "25px",
                width: "25px"
            };
            this.circleBorder = {
                border: "2.5px solid"
            };
            break;
        }
        default: {
            this.wrapperSize = {
                height: "25px",
                width: "25px"
            };
            this.circleBorder = {
                border: "2.5px solid"
            };
            break;
        }
        }
    }

    public render(): React.ReactElement<SavedAnimation> {
        return (<>
            {this.props.shouldShow && this.circleBorder &&
                <div className="loading-circle">
                <div className="wrapper" data-anim="base wrapper" style={this.wrapperSize} >
                    <div className="circle" data-anim="base left" style={this.circleBorder} />
                    <div className="circle" data-anim="base right" style={this.circleBorder} />
                    <div className="rectangle-hide" />
                    <Icon iconName={"svg-checkmark"} iconSize={IconSizeEnum.Smallest}/>
                </div>
                <div className="checkmark-label">{"Saved"}</div>
                </div> }
                </>);
    }
}
