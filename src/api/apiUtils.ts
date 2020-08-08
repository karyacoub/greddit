import Axios, { AxiosResponse } from "axios";

export enum RequestStateTypes {
    NOT_REQUESTED = "NOT_REQUESTED",
    REQUESTED = "REQUESTED",
    REQUEST_SUCCEEDED = "REQUEST_SUCCEEDED",
    REQUEST_FAILED = "REQUEST_FAILED",
}

export interface IRequestState<T> {
    kind: RequestStateTypes;
    data?: T;
}

export const NOT_REQUESTED: IRequestState<any> = {
    kind: RequestStateTypes.NOT_REQUESTED
};

export const REQUESTED: IRequestState<any> = {
    kind: RequestStateTypes.REQUESTED,
};

export function REQUEST_SUCCEEDED(data: any): IRequestState<any> {
    return {
        kind: RequestStateTypes.REQUEST_SUCCEEDED,
        data,
    }
}

export function REQUEST_FAILED(data: any): IRequestState<any> {
    return {
        kind: RequestStateTypes.REQUEST_FAILED,
        data,
    }
}

export class ApiError extends Error {
    public message: string;
    public responseCode: number;

    constructor(responseCode: number, message: string) {
        super();
        this.responseCode = responseCode;
        this.message = message;
    }
}

export function processGetUnwrapped<T>(url: string): Promise<T> {
    return Axios.get(url)
        .then((response: AxiosResponse<T>) => {
            return response.data;
        }).catch((error) => {
            console.log(`Error retrieving GET from [${url}]. Rejecting promise`);
            throw new ApiError(error.response.status, error.response.data);
        });
}