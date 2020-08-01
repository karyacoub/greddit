import { Dispatch } from "redux";
import { HomeScreenApi } from "../../api/HomeScreenApi";

export enum HomeScreenActions {
    DISPLAYED_POSTS_REQUESTED = "DISPLAYED_POSTS_REQUESTED",
    DISPLAYED_POSTS_REQUEST_SUCCEEDED = "DISPLAYED_POSTS_REQUEST_SUCCEEDED",
    DISPLAYED_POSTS_REQUEST_FAILED = "DISPLAYED_POSTS_REQUEST_SUCCEEDED",
}

export function requestPostListings(dispatch: Dispatch) {
    dispatch({ type: HomeScreenActions.DISPLAYED_POSTS_REQUESTED });

    HomeScreenApi.requestPostListings()
        .then((response) => {
            dispatch({
                type: HomeScreenActions.DISPLAYED_POSTS_REQUEST_SUCCEEDED,
                payload: response,
            });
        }).catch((error) => {
            dispatch({
                type: HomeScreenActions.DISPLAYED_POSTS_REQUEST_FAILED,
                payload: error,
            });
        });
}