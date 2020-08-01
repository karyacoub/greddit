import { IApplicationState } from "../store/applicationInitialState";

export interface IApiRequestPair {
    apiRequest: any;
    selector: (state: IApplicationState) => any;
}