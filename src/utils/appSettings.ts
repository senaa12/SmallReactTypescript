class AppSettings {
    public isDevelopment: boolean;
    public backendUrl: string;

    constructor() {
        this.isDevelopment = process.env.NODE_ENV == "development"; 
        this.backendUrl = null;
    }
}

const appSettings = new AppSettings();

export default appSettings;
