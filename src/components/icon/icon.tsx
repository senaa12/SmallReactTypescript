import * as React from "react";

import "./icon.scss";

export interface IconProps {
    iconName: string;
    // TODO: iconSize: ili enum ili fizicki broj
}

export interface IconState {
    useTag: string;
}

export default class Icon extends React.Component<IconProps, IconState> {
    constructor(props: IconProps) {
        super(props);
        this.state = { useTag : "" };
    }

    public componentDidMount() {
        try {
            // TODO: napravit treba put do ikona dinamicki da se cita negdje
            const icon = require("../../assets/svg/" + this.props.iconName + ".svg");
            // tslint:disable-next-line:quotemark
            this.setState({ useTag: '<use xlink:href="#' + icon.default.id + '\"></use>' });
        } catch {
            // TODO: napraviti kak se hendla error lijepo a ne console.log
            console.log("error happend");
        }
    }

    public render(): React.ReactElement<Icon> {
        return (
            <svg className={this.props.iconName} dangerouslySetInnerHTML={{ __html: this.state.useTag }} />
        );
    }
}
