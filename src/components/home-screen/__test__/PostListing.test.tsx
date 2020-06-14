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
        .thumbnail("https://test.url/resource")
        .thumbnailWidth(100)
        .thumbnailHeight(200)
        .build();

    const defaultProps: IPostListingProps = {
        listing,
    };

    beforeAll(async () => {
        subject = await renderWithHooks(<PostListing {...defaultProps} />);
    });

    it("renders the post title", () => {
        expect(subject.findByTestId("post-listing__title")!.text()).toEqual(listing.title);
    });

    it("renders the post score", () => {
        expect(subject.findByTestId("post-listing__score")!.text()).toEqual(listing.score);
    });

    it("renders the post author", () => {
        expect(subject.findByTestId("post-listing__author")!.text()).toContain(listing.author);
    });

    it("renders the post author", () => {
        expect(subject.findByTestId("post-listing__subreddit")!.text()).toContain(listing.subreddit);
    });

    it("renders the post thumbnail when the thumbnail has dimensions", () => {
        expect(subject.findByTestId("post-listing__thumbnail")!.props.source.uri).toEqual(listing.thumbnail);
    });

    // it("does not render the post thumbnail when the thumbnail does not have dimensions (i.e. no thumbnail)", async () => {
    //     const newListing: IListing = {
    //         ...listing,
    //         thumbnailHeight: undefined,
    //         thumbnailWidth: undefined,
    //     };
    //     const props = {
    //         ...defaultProps,
    //         listing: newListing,
    //     };
    //     const newSubject = await renderWithHooks(<PostListing {...props} />);
        
    //     expect(newSubject.findByTestId("post-listing__thumbnail")).toBeNull();
    // });
});