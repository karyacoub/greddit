import { Action, handleActions } from "redux-actions";
import { IRequestState, NOT_REQUESTED, REQUESTED, REQUEST_SUCCEEDED, REQUEST_FAILED } from "../../api/apiUtils";
import { IListing } from "../../models/Listing.model";
import { HomeScreenActions } from "./HomeScreen.actions";

export interface IHomeScreenState { 
    currentPostsList: IRequestState<IListing[]>;
    allPostsList: IListing[];
}

export const homeScreenInitialState: IHomeScreenState = {
    currentPostsList: NOT_REQUESTED,
    allPostsList: [],
};


const homeScreenReducer = {
    [HomeScreenActions.DISPLAYED_POSTS_REQUESTED]: 
        (state: IHomeScreenState): IHomeScreenState => {
            return {
                ...state,
                currentPostsList: REQUESTED,
            };
    },
    [HomeScreenActions.DISPLAYED_POSTS_REQUEST_SUCCEEDED]: 
        (state: IHomeScreenState, action: Action<IListing[]>): IHomeScreenState => {
            return {
                ...state,
                currentPostsList: REQUEST_SUCCEEDED([...state.allPostsList, ...action.payload]),
            };
    },
    [HomeScreenActions.DISPLAYED_POSTS_REQUEST_FAILED]: 
        (state: IHomeScreenState, action: Action<IListing[]>): IHomeScreenState => {
            return {
                ...state,
                currentPostsList: REQUEST_FAILED(action.payload),
            };
    },
    [HomeScreenActions.CLEAR_DISPLAYED_POSTS]: 
        (state: IHomeScreenState): IHomeScreenState => {
            return {
                ...state,
                currentPostsList: NOT_REQUESTED,
            };
    },
}

export function displayedPostsSelectorInner(state: IHomeScreenState): IRequestState<IListing[]> {
    return state.currentPostsList;
}

export default handleActions<IHomeScreenState, IListing[]>(homeScreenReducer, homeScreenInitialState);

