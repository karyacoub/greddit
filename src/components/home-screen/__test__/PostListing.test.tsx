import React from "react";
import { IListing, Listing } from "../../../models/Listing.model";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import { IPostListingProps, PostListing } from "../PostListing";
import { Thumbnail } from "../Thumbnail";

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

    it("renders the thumbnail component with the correct props", () => {
        // expect(subject.findByTestId("post-listing__thumbnail")!.props.source.uri).toEqual(listing.thumbnail);
        const thumbnail = subject.findByType(Thumbnail);

        expect(thumbnail.props.thumbnailUrl).toEqual(defaultProps.listing.thumbnail);
        expect(thumbnail.props.thumbnailHeight).toEqual(defaultProps.listing.thumbnailHeight);
        expect(thumbnail.props.thumbnailWidth).toEqual(defaultProps.listing.thumbnailWidth);
    });
});