import * as React from "react";
import Icon, { IconSizeEnum } from "../icon/icon";

import "./savedAnimation.scss";

export interface SavedAnimationProps {
    shouldShow: boolean;
}

export default class SavedAnimation extends React.Component<SavedAnimationProps, never> {
    constructor(props: SavedAnimationProps) {
        super(props);
    }

    public render(): React.ReactElement<SavedAnimation> {
        return (<>
            {this.props.shouldShow &&
                <div className="loading-circle">
                <div className="wrapper" data-anim="base wrapper" >
                    <div className="circle" data-anim="base left" />
                    <div className="circle" data-anim="base right" />
                    <div className="rectangle-hide" />
                    <Icon iconName={"svg-checkmark"} iconSize={IconSizeEnum.Smallest}/>
                </div>
                <div className="checkmark-label">{"Saved"}</div>
                </div> }
                </>);
    }
}
