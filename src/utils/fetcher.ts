import { AjaxResponse } from "../assets/ajaxResponse";
import appSettings from "./appSettings";

interface IRequestActionOptions {
    requestUrl: string;
    requestActionName: string;
    requestActionPayload?: any;
    requestInit?: RequestInit;
}

class Fetcher {
    // on BE part enable cors & register so API responds in json format
    private readonly init: RequestInit = {
        method: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        }
    };

    public simpleFetch(dispatch: any, options: IRequestActionOptions): Promise<any> {
        // tslint:disable-next-line:no-parameter-reassignment
        options = { ...options };

        const requestAction: string = `${options.requestActionName}_REQUEST`;
        const responseAction: string = `${options.requestActionName}_RESPONSE`;
        const errorAction: string = `${options.requestActionName}_ERROR`;

        dispatch({
            type: requestAction,
            payload: options.requestActionPayload
        });

        let url: string = options.requestUrl;
        if (appSettings.environment === "development") {
            url = appSettings.backendUrl + url;
        }

        return fetch(url, { ...this.init, ...options.requestInit })
        .then((response) => {
            if (response.ok) {
                return response.json().then((jsonResponse) => {
                    const ajaxResponse = jsonResponse as AjaxResponse;
                    dispatch({
                        type: responseAction,
                        payload: ajaxResponse
                    });

                    return Promise.resolve(ajaxResponse);
                });
            } else {
                let payload: any = {
                    status: response.status,
                    genericMessage: `Response not OK! Rejecting payload for ${options.requestActionName}!`,
                    body: null
                };

                // REDIRECT TO ERROR HANDLE, NO DISPATCH HERE

                return response.json()
                    .then((errorResponse) => {
                        payload = { ...payload, body: errorResponse };
                    })
                    .then((resp) => {
                        return Promise.reject(payload);
                    })
                    .catch((err) => Promise.reject(payload));
            }
        })
        .catch((error) => {
            const message: string = error.status
                ? error.status + "<br />" + error.genericMessage + "<br />"
                : error.message;

            dispatch({
                type: errorAction,
                payload: message
            });

            return Promise.reject(error);
        });
    }
}

const fetcher = new Fetcher();

export default fetcher;
