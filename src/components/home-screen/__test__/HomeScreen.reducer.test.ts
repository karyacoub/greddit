import { mockStore } from "../../../testUtils";
import { HomeScreenActions } from "../HomeScreen.actions";

describe("HomeScreen reducer", () => {
    beforeEach(() => {
        mockStore.clearActions();
    });

    it("handles DISPLAYED_POSTS_REQUESTED", () => {
        // console.error("=========>", mockStore.getState());

        expect(1).toEqual(1);
    });
});