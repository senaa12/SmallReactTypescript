import * as ReactDOM from "react-dom";
import * as React from "react";

class AppSettings {
    public environment: string;

    constructor() {
        this.environment = process.env.NODE_ENV;
    }
}

const appSettings = new AppSettings();

export default appSettings;
