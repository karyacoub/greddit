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

    it("renders the post thumbnail when the thumbnail is a link", () => {
        expect(subject.findByTestId("post-listing__thumbnail")!.props.source.uri).toEqual(listing.thumbnail);
    });

    it("does not render the post thumbnail when the thumbnail is not a link", async () => {
        const newListing: IListing = {
            ...listing,
            thumbnail: "invalid url",
        };
        const props = {
            ...defaultProps,
            listing: newListing,
        }
        const newSubject = await renderWithHooks(<PostListing {...props} />)
        
        expect(newSubject.findByTestId("post-listing__thumbnail")).toBeNull();
    });
});