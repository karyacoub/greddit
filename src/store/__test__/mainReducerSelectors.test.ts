jest.mock("../../components/home-screen/HomeScreen.reducer");

import { REQUESTED } from "../../api/apiUtils";
import { displayedPostsSelectorInner } from "../../components/home-screen/HomeScreen.reducer";
import { displayedPostsSelector } from "../mainReducerSelectors";
import { applicationInitialState } from "../applicationInitialState";

describe("displayedPostsSelector", () => {
    it("returns the result of the inner selector", () => {
        (displayedPostsSelectorInner as jest.Mock).mockReturnValue(REQUESTED);

        expect(displayedPostsSelector(applicationInitialState)).toEqual(REQUESTED);
    });
});