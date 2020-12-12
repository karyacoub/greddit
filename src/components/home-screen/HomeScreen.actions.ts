import { Dispatch } from "redux";
import { HomeScreenApi } from "../../api/HomeScreenApi";

export enum HomeScreenActions {
    DISPLAYED_POSTS_REQUESTED = "DISPLAYED_POSTS_REQUESTED",
    DISPLAYED_POSTS_REQUEST_SUCCEEDED = "DISPLAYED_POSTS_REQUEST_SUCCEEDED",
    DISPLAYED_POSTS_REQUEST_FAILED = "DISPLAYED_POSTS_REQUEST_FAILED",
    CLEAR_DISPLAYED_POSTS = "CLEAR_DISPLAYED_POSTS",
}

export function requestPostListings(after?: string) {
    return (dispatch: Dispatch) => {
        dispatch({ type: HomeScreenActions.DISPLAYED_POSTS_REQUESTED });

        HomeScreenApi.requestPostListings(after)
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
    };
}

export function clearPostListings(dispatch: Dispatch) {
    dispatch({ type: HomeScreenActions.CLEAR_DISPLAYED_POSTS });
}