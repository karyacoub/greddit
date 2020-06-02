import React from "react";
import { IListing, Listing } from "../../../models/Listing.model";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import { IPostListingProps, PostListing } from "../PostListing";

describe("PostListing component", () => {
    let subject: TestRendererWithHooks;

    const listing: IListing = Listing.builder()
        .name("post-listing")
        .title("Post Listing")
        .author("author")
        .score(100)
        .subreddit("subreddit")
        .build();

    const defaultProps: IPostListingProps = {
        listing,
    };

    beforeAll(async () => {
        subject = await renderWithHooks(<PostListing {...defaultProps} />);
    });

    it("renders the post title", () => {
        expect(subject.findByTestId("post-listing__title").text()).toEqual(listing.title);
    });

    it("renders the post score", () => {
        expect(subject.findByTestId("post-listing__score").text()).toEqual(listing.score);
    });

    it("renders the post author", () => {
        expect(subject.findByTestId("post-listing__author").text()).toEqual(`/u/${listing.author}`);
    });

    it("renders the post author", () => {
        expect(subject.findByTestId("post-listing__subreddit").text()).toEqual(`/r/${listing.subreddit}`);
    });
});