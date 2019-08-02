import * as React from "react";
import MediaQuery from "react-responsive";
import appSettings from "./appSettings";

export const Mobile = (props: any) => <MediaQuery {...props} maxDeviceWidth={appSettings.maxMobileWidth} />;
export const Desktop = (props: any) => <MediaQuery {...props} minDeviceWidth={appSettings.minDesktopWidth} />;
