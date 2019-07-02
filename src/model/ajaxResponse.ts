export interface Action {
    type: string;
    payload: any;
}

export interface AjaxResponse {
    responseType: AjaxResponseTypeEnum;
    errorMessage: string;
    data: any;
}

export const enum AjaxResponseTypeEnum {
    success = 0,
    warning = 2,
    error = 1
  }
