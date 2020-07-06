import React from "react";
import { TestRendererWithHooks, renderWithHooks } from "../../../testUtils";
import { Thumbnail, IThumbnailProps } from "../Thumbnail";
import "jest-extended";

describe("Thumbnail component", () => {
    let subject: TestRendererWithHooks;

    const defaultProps: IThumbnailProps = {
        domain: "domain",
        thumbnailUrl: "url",
        thumbnailHeight: 1,
        thumbnailWidth: 1,
    };

    beforeAll(async () => {
        subject = await renderWithHooks(<Thumbnail {...defaultProps} />);
    });

    it("renders an image component with the correct source uri when the passed in thumbnail has dimensions", () => {
        expect(subject.findByTestId("post-listing__default-thumbnail").exists()).toBeFalse();
        expect(subject.findByTestId("post-listing__thumbnail").props.source.uri).toEqual(defaultProps.thumbnailUrl);
    });

    it("does not render any thumbnail when thumbnail is from a self post", async () => {
        const props = {
            ...defaultProps,
            domain: "self",
        };
        subject = await renderWithHooks(<Thumbnail {...props} />);

        expect(subject.findByTestId("post-listing__thumbnail").exists()).toBeFalse();
        expect(subject.findByTestId("post-listing__default-thumbnail").exists()).toBeFalse();
    });

    it("renders the default thumbnail when thumbnail url is default", async () => {
        const props = {
            ...defaultProps,
            thumbnailUrl: "default",
        };
        subject = await renderWithHooks(<Thumbnail {...props} />);

        expect(subject.findByTestId("post-listing__thumbnail").exists()).toBeFalse();
        expect(subject.findByTestId("post-listing__default-thumbnail").exists()).toBeTrue();
    });

    it("renders the nsfw thumbnail when thumbnail url is nsfw", async () => {
        const props = {
            ...defaultProps,
            thumbnailUrl: "nsfw",
        };
        subject = await renderWithHooks(<Thumbnail {...props} />);

        expect(subject.findByTestId("post-listing__thumbnail").exists()).toBeFalse();
        expect(subject.findByTestId("post-listing__nsfw-thumbnail").exists()).toBeTrue();
    });

    it("renders the spoiler thumbnail when thumbnail url is spoiler", async () => {
        const props = {
            ...defaultProps,
            thumbnailUrl: "spoiler",
        };
        subject = await renderWithHooks(<Thumbnail {...props} />);

        expect(subject.findByTestId("post-listing__thumbnail").exists()).toBeFalse();
        expect(subject.findByTestId("post-listing__spoiler-thumbnail").exists()).toBeTrue();
    });
});