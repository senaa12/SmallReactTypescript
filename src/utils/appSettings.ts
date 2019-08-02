class AppSettings {
    public isDevelopment: boolean;
    public backendUrl: string;
    public maxMobileWidth: number;
    public minDesktopWidth: number;

    constructor() {
        this.isDevelopment = process.env.NODE_ENV == "development";
        this.backendUrl = null;
        this.maxMobileWidth = 767;
        this.minDesktopWidth = this.maxMobileWidth + 1;
    }
}

const appSettings = new AppSettings();

export default appSettings;
