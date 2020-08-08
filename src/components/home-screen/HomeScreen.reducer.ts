import { Action, handleActions } from "redux-actions";
import { IRequestState, NOT_REQUESTED, REQUESTED, REQUEST_SUCCEEDED, REQUEST_FAILED } from "../../api/apiUtils";
import { IListing } from "../../models/Listing.model";
import { HomeScreenActions } from "./HomeScreen.actions";

export interface IHomeScreenState { 
    displayedPosts: IRequestState<IListing[]>;
}

export const homeScreenInitialState: IHomeScreenState = {
    displayedPosts: NOT_REQUESTED,
};


const homeScreenReducer = {
    [HomeScreenActions.DISPLAYED_POSTS_REQUESTED]: 
        (state: IHomeScreenState): IHomeScreenState => {
            return {
                ...state,
                displayedPosts: REQUESTED,
            };
    },
    [HomeScreenActions.DISPLAYED_POSTS_REQUEST_SUCCEEDED]: 
        (state: IHomeScreenState, action: Action<IListing[]>): IHomeScreenState => {
            return {
                ...state,
                displayedPosts: REQUEST_SUCCEEDED(action.payload),
            };
    },
    [HomeScreenActions.DISPLAYED_POSTS_REQUEST_FAILED]: 
        (state: IHomeScreenState, action: Action<IListing[]>): IHomeScreenState => {
            return {
                ...state,
                displayedPosts: REQUEST_FAILED(action.payload),
            };
    },
}

export function displayedPostsSelectorInner(state: IHomeScreenState): IRequestState<IListing[]> {
    return state.displayedPosts;
}

export default handleActions<IHomeScreenState, IListing[]>(homeScreenReducer, homeScreenInitialState);

