jest.mock("../../../api/PostListingApi");

import React from "react";
import { FlatList } from "react-native";
import { requestPostListing } from "../../../api/PostListingApi";
import { Listing } from "../../../models/Listing.model";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import { HomeScreen } from "../HomeScreen";
import { act } from "react-test-renderer";

describe("HomeScreen component", () => {
    let subject: TestRendererWithHooks;

    const postListings: Listing[] = [
        Listing.builder()
            .title("Post 1")
            .name("post-name-1")
            .build(),
        Listing.builder()
            .title("Post 2")
            .name("post-name-2")
            .build(),
        Listing.builder()
            .title("Post 3")
            .name("post-name-3")
            .build(),
    ]

    beforeAll(async () => {
        (requestPostListing as jest.Mock)
            .mockResolvedValue(postListings);
        
        subject = await renderWithHooks(<HomeScreen />);
    });

    it("requests front page post listings on render", () => {
        expect(requestPostListing).toHaveBeenCalled();
    });

    it("renders a FlatList with the correct props", () => {
        const flatList = subject.findByType(FlatList);

        expect(flatList.props.data).toEqual(postListings);
    });

    it("requests post listing with listing name parameter", async () => {
        await act(async () => {
            subject.findByType(FlatList).props.onEndReached();
        })

        expect(requestPostListing).toHaveBeenCalledWith(postListings[2].name);
    });
});