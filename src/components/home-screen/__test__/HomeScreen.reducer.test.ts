import { REQUESTED, NOT_REQUESTED } from "../../../api/apiUtils";
import { Listing } from "../../../models/Listing.model";
import { fireAction } from "../../../testUtils";
import { HomeScreenActions } from "../HomeScreen.actions";
import HomeScreenReducer, { homeScreenInitialState, displayedPostsSelectorInner } from "../HomeScreen.reducer";

describe("HomeScreen reducer", () => {
    it("handles DISPLAYED_POSTS_REQUESTED", () => {
        const state = fireAction(
            HomeScreenReducer, 
            homeScreenInitialState, 
            HomeScreenActions.DISPLAYED_POSTS_REQUESTED
        );

        expect(state.displayedPosts.kind).toEqual(REQUESTED.kind);
    });
    
    it("handles DISPLAYED_POSTS_REQUEST_SUCCEEDED", () => {
        const expectedPayload = [Listing.builder().build()];

        const state = fireAction(
            HomeScreenReducer, 
            homeScreenInitialState, 
            HomeScreenActions.DISPLAYED_POSTS_REQUEST_SUCCEEDED,
            expectedPayload,
        );

        expect(state.displayedPosts.data).toEqual(expectedPayload);
    });

    it("handles DISPLAYED_POSTS_REQUEST_FAILED", () => {
        const expectedPayload = "oh no";

        const state = fireAction(
            HomeScreenReducer, 
            homeScreenInitialState, 
            HomeScreenActions.DISPLAYED_POSTS_REQUEST_FAILED,
            expectedPayload,
        );

        expect(state.displayedPosts.data).toEqual(expectedPayload);
    });
});

describe("displayedPostsSelectorInner", () => {
    it("returns the value of displayedPosts in the home screen state", () => {
        expect(displayedPostsSelectorInner(homeScreenInitialState)).toEqual(NOT_REQUESTED);
    });
});