jest.mock("../../../api/HomeScreenApi");
jest.mock("../../../store/mainReducerSelectors");

import React from "react";
import { FlatList } from "react-native";
import { act } from "react-test-renderer";
import { HomeScreenApi } from "../../../api/HomeScreenApi";
import { Listing } from "../../../models/Listing.model";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import { HomeScreen, mapStateToProps, IHomeScreenPropsFromStore } from "../HomeScreen";
import { PostListing } from "../PostListing";
import { applicationInitialState } from "../../../store/applicationInitialState";
import { displayedPostsSelector } from "../../../store/mainReducerSelectors";
import { REQUEST_FAILED } from "../../../api/apiUtils";

describe("HomeScreen component", () => {
    let subject: TestRendererWithHooks;

    const postListings: Listing[] = [
        Listing.builder()
            .title("Post 1")
            .name("post-name-1")
            .score(100)
            .build(),
        Listing.builder()
            .title("Post 2")
            .name("post-name-2")
            .score(200)
            .build(),
        Listing.builder()
            .title("Post 3")
            .name("post-name-3")
            .score(300)
            .build(),
    ];

    const defaultProps: IHomeScreenPropsFromStore = {
        displayedPosts: postListings,
    }

    beforeAll(async () => {
        (HomeScreenApi.requestPostListings as jest.Mock)
            .mockResolvedValue(postListings);
        
        subject = await renderWithHooks(<HomeScreen {...defaultProps} />);
    });

    it("requests front page post listings on render", () => {
        expect(HomeScreenApi.requestPostListings).toHaveBeenCalled();
    });

    it("renders a FlatList with the correct props", () => {
        const flatList = subject.findByType(FlatList);

        expect(flatList.props.data).toEqual(postListings);
    });

    it("renders PostListing component for each post", () => {
        const listings = subject.findAllByType(PostListing);

        expect(listings.length).toEqual(3);
        expect(listings[0].props.listing).toEqual(postListings[0]);
        expect(listings[1].props.listing).toEqual(postListings[1]);
        expect(listings[2].props.listing).toEqual(postListings[2]);
    });

    it("requests post listing with listing name parameter when the end of the page is reached", async () => {
        await act(async () => {
            subject.findByType(FlatList).props.onEndReached();
        })

        expect(HomeScreenApi.requestPostListings).toHaveBeenCalledWith(postListings[2].name);
    });
});

describe("mapStateToProps", () => {
    it("maps state to component props", () => {
        (displayedPostsSelector as jest.Mock).mockReturnValue(REQUEST_FAILED("oh no"));

        expect(mapStateToProps(applicationInitialState).displayedPosts).toEqual("oh no");
    });
});