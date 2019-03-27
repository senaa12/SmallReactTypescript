import { AjaxResponse, AjaxResponseTypeEnum } from "../assets/ajaxResponse";

interface IRequestActionOptions {
    requestUrl: string;
    requestActionName: string;
    requestActionPayload?: any;
    jsonResponseExpected?: boolean;
    requestInit?: RequestInit;
    responsePayloadMapper?(payload: any): any;
    errorPayloadMapper?(error: any): any;
}

class Fetcher {
    private readonly init: RequestInit = {
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    };

    public handleRequestAction(dispatch: any, options: IRequestActionOptions): Promise<any> {
        // tslint:disable-next-line:no-parameter-reassignment
        options = { ...options };

        const requestAction: string = `${options.requestActionName}_REQUEST`;
        const responseAction: string = `${options.requestActionName}_RESPONSE`;
        const errorAction: string = `${options.requestActionName}_ERROR`;

        if (options.jsonResponseExpected === undefined) {
            options.jsonResponseExpected = true;
        }

        dispatch({
            type: requestAction,
            payload: options.requestActionPayload
        });

        let url: string = options.requestUrl;
        // treba procitat environment i saznat na koji url saljes zahtjev
        if (process.env.environment === "development") {
            url = "http://localhost:44300" + url;
        }

        return fetch(url, { ...this.init, ...options.requestInit })
        .then((response) => {
            let ajaxResponse: AjaxResponse;
            if (response.ok) {
                if (options.jsonResponseExpected) {
                    return response.json().then((jsonResponse) => {
                        ajaxResponse = jsonResponse as AjaxResponse;
                        if (ajaxResponse.responseType === AjaxResponseTypeEnum.success) {
                            if (ajaxResponse.errorMessage != null) {

                            }
                            dispatch({
                                type: responseAction,
                                payload: options.responsePayloadMapper
                                    ? options.responsePayloadMapper(ajaxResponse)
                                    : ajaxResponse
                            });
                        } else {

                            dispatch({
                                type: responseAction,
                                payload: ajaxResponse
                            });
                        }
                        return Promise.resolve(ajaxResponse as any);
                    });
                }
                dispatch({
                    type: responseAction,
                    payload: null
                });
                return Promise.resolve();

            } else {
                let payload: any = {
                    status: response.status,
                    genericMessage: `Response not OK! Rejecting payload for ${options.requestActionName}!`,
                    body: null
                };

                // potencijalni redirect
                // if (payload.status === 403) {
                //     hashHistory.push("/FourOhThree");
                // }
                // if (payload.status === 404) {
                //     hashHistory.push("/FourOhFour");
                // }

                return response
                    .json()
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

            let payload: any = (error.status !== undefined && error.body !== undefined && error) || null;

            if (options.errorPayloadMapper) {
                payload = options.errorPayloadMapper(payload);
            }

            dispatch({
                type: errorAction,
                payload
            });

            return Promise.reject(error);
        });
    }
}

const fetcher = new Fetcher();

export default fetcher;
