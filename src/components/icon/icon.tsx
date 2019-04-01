import * as React from "react";
import "./icon.scss";

export enum IconSizeEnum {
    Smallest, // 16x16
    Small, // 24x24
    Normal, // 32x32
    Big // 64x64
}

export interface IconProps {
    iconName: string;
    iconSize?: IconSizeEnum;
    className?: string;
}

export interface IconState {
    useTag: string;
    iconSize: string;
}

export default class Icon extends React.Component<IconProps, IconState> {
    constructor(props: IconProps) {
        super(props);
        this.state = { useTag : "", iconSize: "" };
    }

    private getIconSize = () => {
        switch (this.props.iconSize) {
        case IconSizeEnum.Smallest:
            return "16px";
        case IconSizeEnum.Small:
            return "24px";
        case IconSizeEnum.Normal:
            return "32px";
        case IconSizeEnum.Big:
            return "64px";
        default: return "32px";
        }
    }

    public componentDidMount() {
        try {
            // TODO: napravit treba put do ikona dinamicki da se cita negdje
            const icon = require("../../assets/svg/" + this.props.iconName + ".svg");
            this.setState({
                // tslint:disable-next-line:quotemark
                useTag: '<use xlink:href="#' + icon.default.id + '\"></use>',
                iconSize: this.getIconSize()
            });
        } catch (ex) {
            // tslint:disable-next-line:no-console
            console.log(ex);
        }
    }

    public render(): React.ReactElement<Icon> {
        return (
            <svg
                className={this.props.iconName + " " + this.props.className}
                dangerouslySetInnerHTML={{ __html: this.state.useTag }}
                width={this.state.iconSize}
                height={this.state.iconSize}
            />
        );
    }
}
