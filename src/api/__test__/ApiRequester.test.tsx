import * as React from "react";
import { ApiRequester, ApiRequesterWrapper, IApiRequesterProps } from "../ApiRequester";
import { IApiRequestPair } from "../RequestPairs";
import { renderWithHooks, TestRendererWithHooks } from "../../testUtils";
import "jest-extended";
import { IApplicationState } from "../../store/applicationInitialState";

describe("ApiRequester component", () => {
    let subject: TestRendererWithHooks;

    const defaultChild: React.FunctionComponent = () => <div />;

    const requestPair1: IApiRequestPair = {
        selector: jest.fn(),
        apiRequest: jest.fn(),
    }

    const requestPair2: IApiRequestPair = {
        selector: jest.fn(),
        apiRequest: jest.fn(),
    }

    const defaultProps: IApiRequesterProps = {
        requestPairs: [requestPair1, requestPair2],
        children: defaultChild,
    }

    beforeAll(async () => {
        subject = await renderWithHooks(<ApiRequester {...defaultProps} />);
    });

    // it("", () => {
        // TODO
    // });
});

describe("ApiRequesterWrapper", async () => {
    it("returns an ApiRequester component with the correct props", async () => {
        const expectedComponent: React.FunctionComponent = () => <div />;
        const requestPairs: IApiRequestPair[] = [];

        const WrapperComponent = ApiRequesterWrapper(expectedComponent, requestPairs);

        const subject = await renderWithHooks(WrapperComponent);

        expect(subject.findByType(expectedComponent).exists()).toBeTrue();
    });
});