import { IApplicationState } from "./applicationInitialState";
import { IRequestState } from "../api/apiUtils";
import { IListing } from "../models/Listing.model";
import { displayedPostsSelectorInner } from "../components/home-screen/HomeScreen.reducer";

export function displayedPostsSelector(state: IApplicationState): IRequestState<IListing[]> {
    return displayedPostsSelectorInner(state.currentPostsState);
}