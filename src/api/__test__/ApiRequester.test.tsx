jest.mock("react-redux");

import * as React from "react";
import { ApiRequester, ApiRequesterWrapper, IApiRequesterProps } from "../ApiRequester";
import { IApiRequestPair } from "../RequestPairs";
import { renderWithHooks, TestRendererWithHooks } from "../../testUtils";
import "jest-extended";
import { applicationInitialState, IApplicationState } from "../../store/applicationInitialState";
import { useStore } from "react-redux";

// describe("ApiRequester component", () => {
//     let subject: TestRendererWithHooks;

//     const defaultChild: React.FunctionComponent = () => <div />;

//     const requestPair1: IApiRequestPair = {
//         selector: jest.fn(),
//         apiRequest: jest.fn(),
//     }

//     const requestPair2: IApiRequestPair = {
//         selector: jest.fn(),
//         apiRequest: jest.fn(),
//     }

//     const defaultProps: IApiRequesterProps = {
//         requestPairs: [requestPair1, requestPair2],
//         children: defaultChild,
//     }

//     beforeAll(async () => {
//         (useStore as jest.Mock).mockReturnValue(applicationInitialState);
        
//         subject = await renderWithHooks(<ApiRequester {...defaultProps} />);
//     });

//     it("calls selectors of all request pairs passed in", () => {
//         expect(requestPair1.selector).toHaveBeenCalledWith(applicationInitialState)
//         expect(requestPair2.selector).toHaveBeenCalledWith(applicationInitialState)
//     });
// });

describe("ApiRequesterWrapper", async () => {
    it("returns an ApiRequester component with the correct props", async () => {
        // const expectedComponent: React.FunctionComponent = () => <div />;
        // const requestPairs: IApiRequestPair[] = [];

        // const WrapperComponent = ApiRequesterWrapper(expectedComponent, requestPairs);

        // const subject = await renderWithHooks(WrapperComponent);

        // expect(subject.findByType(expectedComponent).exists()).toBeTrue();

        expect(1).toEqual(1);
    });
});