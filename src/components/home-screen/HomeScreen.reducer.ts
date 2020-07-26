import { IListing } from "../../models/Listing.model";
import { IRequestState, NOT_REQUESTED, REQUESTED } from "../../api/apiUtils";
import { HomeScreenActions } from "./HomeScreen.actions";
import { handleActions, ReducerMap } from "redux-actions"

export interface IHomeScreenState { 
    displayedPosts: IRequestState<IListing[]>;
}

export const homeScreenInitialState: IHomeScreenState = {
    displayedPosts: NOT_REQUESTED,
};


const homeScreenReducer: ReducerMap<IHomeScreenState, IHomeScreenState> = {
    [HomeScreenActions.DISPLAYED_POSTS_REQUESTED]: 
        (state: IHomeScreenState): IHomeScreenState => {
            return {
                ...state,
                displayedPosts: REQUESTED,
            };
    },
}

export default handleActions<IHomeScreenState>(homeScreenReducer, homeScreenInitialState);

