import React from "react";
import { TestRendererWithHooks, renderWithHooks } from "../../../testUtils";
import { Thumbnail, IThumbnailProps } from "../Thumbnail";
import "jest-extended";

describe("Thumbnail component", () => {
    let subject: TestRendererWithHooks;

    const defaultProps: IThumbnailProps = {
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

    it("renders the default thumbnail when thumbnail has no dimensions", async () => {
        const props = {
            ...defaultProps,
            thumbnailHeight: 0,
            thumbnailWidth: 0,
        }
        subject = await renderWithHooks(<Thumbnail {...props} />);

        expect(subject.findByTestId("post-listing__thumbnail").exists()).toBeFalse();
        expect(subject.findByTestId("post-listing__default-thumbnail").exists()).toBeTrue();
    });
});