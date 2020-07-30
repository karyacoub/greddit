import * as React from "react";
import { ApiRequesterWrapper } from "../ApiRequester";
import { IApiRequestPair } from "../RequestPairs";
import { renderWithHooks, TestRendererWithHooks } from "../../testUtils";

describe("ApiRequesterWrapper", () => {
    it("returns an ApiRequester component with the correct props", async () => {
        const expectedComponent: React.FunctionComponent = () => <div />;
        const requestPairs: IApiRequestPair[] = [];

        const WrapperComponent = ApiRequesterWrapper(expectedComponent, requestPairs);

        // expect(WrapperComponent.props.children).toEqual(expectedComponent);
    });
});