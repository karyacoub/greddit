import React from "react";
import { IListing, Listing } from "../../../models/Listing.model";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import { IPostListingProps, PostListing } from "../PostListing";

describe("PostListing component", () => {
    let subject: TestRendererWithHooks;

    const listing: IListing = Listing.builder()
        .name("post-listing")
        .title("Post Listing")
        .score(100)
        .build();

    const defaultProps: IPostListingProps = {
        listing,
    };

    beforeAll(async () => {
        subject = await renderWithHooks(<PostListing {...defaultProps} />);
    });

    it("renders the post title", () => {
        expect(subject.findByTestId("post-listing__title").props.children).toEqual(listing.title);
    });

    it("renders the post score", () => {
        expect(subject.findByTestId("post-listing__score").props.children).toEqual(listing.score);
    });

    it("renders the post author", () => {
        expect(subject.findByTestId("post-listing__author").props.children).toEqual(`/u/${listing.author}`);
    });
});