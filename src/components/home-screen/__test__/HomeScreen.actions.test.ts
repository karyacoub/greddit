jest.mock("../../../api/HomeScreenApi");

import { HomeScreenApi } from "../../../api/HomeScreenApi";
import { Listing } from "../../../models/Listing.model";
import { flushPromises } from "../../../testUtils";
import { HomeScreenActions, requestPostListings } from "../HomeScreen.actions";

describe("HomeScreen actions", () => {
    let dispatch = jest.fn();

    beforeEach(() => {
        dispatch = jest.fn();
    });

    describe("requestPostListings", () => {
        const successfulPayload = [Listing.builder().build()];

        it("dispatches DISPLAYED_POSTS_REQUESTED", () => {
            (HomeScreenApi.requestPostListings as jest.Mock).mockResolvedValue(successfulPayload);

            requestPostListings(dispatch);

            expect(dispatch).toHaveBeenCalledWith({ type: HomeScreenActions.DISPLAYED_POSTS_REQUESTED });
        });

        it("dispatches DISPLAYED_POSTS_REQUEST_SUCCEEDED with a payload on api request success", async () => {
            (HomeScreenApi.requestPostListings as jest.Mock).mockResolvedValue(successfulPayload);

            await requestPostListings(dispatch);

            expect(dispatch).toHaveBeenCalledWith({
                type: HomeScreenActions.DISPLAYED_POSTS_REQUEST_SUCCEEDED,
                payload: successfulPayload,
            });
        });

        it("dispatches DISPLAYED_POSTS_REQUEST_FAILED with a payload on api request failure", async () => { 
            const expectedPayload = "oh no";
            (HomeScreenApi.requestPostListings as jest.Mock).mockRejectedValue(expectedPayload);

            await requestPostListings(dispatch);
            await flushPromises();

            expect(dispatch).toHaveBeenCalledWith({
                type: HomeScreenActions.DISPLAYED_POSTS_REQUEST_FAILED,
                payload: expectedPayload,
            });
        });
    });
});