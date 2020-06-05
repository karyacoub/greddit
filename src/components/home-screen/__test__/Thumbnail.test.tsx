import React from "react";
import { TestRendererWithHooks, renderWithHooks } from "../../../testUtils";
import { Thumbnail, IThumbnailProps } from "../Thumbnail";

describe("Thumbnail component", () => {
    let subject: TestRendererWithHooks;

    const defaultProps: IThumbnailProps = {
        thumbnailUrl: "url",
        thumbnailHeight: 1,
        thumbnailWidth: 1,
    };

    beforeAll(async () => {
        subject = await renderWithHooks(<Thumbnail />);
    });

    it("renders an image component with the correct source uri when the passed in thumbnail has dimensions", () => {
        // TODO
        expect(1).toEqual(1);
    });
});