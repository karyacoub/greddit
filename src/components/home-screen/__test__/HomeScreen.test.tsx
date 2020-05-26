jest.mock("../../../api/PostListingApi");

import React from "react";
import { Text } from "react-native";
import { requestPostListing } from "../../../api/PostListingApi";
import { Listing } from "../../../models/Listing.model";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import { HomeScreen } from "../HomeScreen";

describe("HomeScreen component", () => {
    let subject: TestRendererWithHooks;

    const postListings: Listing[] = [
        Listing.builder().title("Post 1").build(),
        Listing.builder().title("Post 2").build(),
        Listing.builder().title("Post 3").build(),
    ]

    beforeAll(async () => {
        (requestPostListing as jest.Mock)
            .mockResolvedValue(postListings);
        
        subject = await renderWithHooks(<HomeScreen />);
    });

    it("requests front page post listings on render", () => {
        expect(requestPostListing).toHaveBeenCalled();
    });

    it("displays post titles", () => {
        const postTitles = subject.findAllByType(Text);

        expect(postTitles.length).toEqual(3);
        expect(postTitles[0].props.children).toEqual(postListings[0].title);
        expect(postTitles[1].props.children).toEqual(postListings[1].title);
        expect(postTitles[2].props.children).toEqual(postListings[2].title);
    });
});