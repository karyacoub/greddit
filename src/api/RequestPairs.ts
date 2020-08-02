import { Dispatch } from "redux";
import { requestPostListings } from "../components/home-screen/HomeScreen.actions";
import { IApplicationState } from "../store/applicationInitialState";
import { displayedPostsSelector } from "../store/mainReducerSelectors";
import { IRequestState } from "./apiUtils";

export interface IApiRequestPair {
    apiRequest: (dispatch: Dispatch) => any;
    selector: (state: IApplicationState) => IRequestState<any>;
}

export const displayedPostsRequestPair: IApiRequestPair = {
    apiRequest: requestPostListings,
    selector: displayedPostsSelector,
}