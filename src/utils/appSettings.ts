class AppSettings {
    public environment: string;
    public backendUrl: string;

    constructor() {
        this.environment = process.env.NODE_ENV;
        this.backendUrl = null;
    }
}

const appSettings = new AppSettings();

export default appSettings;
