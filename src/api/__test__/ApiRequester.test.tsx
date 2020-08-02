jest.mock("react-redux");

import "jest-extended";
import * as React from "react";
import { useStore, useDispatch } from "react-redux";
import { ErrorScreen } from "../../components/common/ErrorScreen";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { applicationInitialState } from "../../store/applicationInitialState";
import { renderWithHooks, TestRendererWithHooks } from "../../testUtils";
import { ApiRequester, ApiRequesterWrapper, IApiRequesterProps } from "../ApiRequester";
import { NOT_REQUESTED, REQUEST_FAILED, REQUEST_SUCCEEDED } from "../apiUtils";
import { IApiRequestPair } from "../RequestPairs";

const mockStore = {
    getState: () => applicationInitialState,
};

describe("ApiRequester component", () => {
    let subject: TestRendererWithHooks;

    const defaultChild: React.FunctionComponent = () => <div />;

    const requestPair1: IApiRequestPair = {
        selector: jest.fn().mockReturnValue(NOT_REQUESTED),
        apiRequest: jest.fn(),
    }

    const requestPair2: IApiRequestPair = {
        selector: jest.fn().mockReturnValue(NOT_REQUESTED),
        apiRequest: jest.fn(),
    }

    const defaultProps: IApiRequesterProps = {
        requestPairs: [requestPair1, requestPair2],
        children: defaultChild,
    }
    
    const dispatch = jest.fn();

    beforeEach(async () => {
        (useStore as jest.Mock).mockReturnValue(mockStore);
        (useDispatch as jest.Mock).mockReturnValue(dispatch);
        
        subject = await renderWithHooks(<ApiRequester {...defaultProps} />);
    });

    it("calls selectors of all request pairs passed in", () => {
        expect(requestPair1.selector).toHaveBeenCalledWith(applicationInitialState)
        expect(requestPair2.selector).toHaveBeenCalledWith(applicationInitialState)
    });

    it("renders loading component by default", () => {
        expect(subject.findByType(LoadingSpinner).exists()).toBeTrue();
    });

    it("renders child component when all values in the state are successes", async () => {
        const successRequestPair: IApiRequestPair = {
            apiRequest: jest.fn(),
            selector: jest.fn().mockReturnValue(REQUEST_SUCCEEDED("yes")),
        };

        const props = {
            ...defaultProps,
            requestPairs: [successRequestPair],
        };
        subject = await renderWithHooks(<ApiRequester {...props} />);

        expect(subject.findByTestId("api-requester__child").exists()).toBeTrue();
    });

    it("renders error screen if any values in the state are failures", async () => {
        const failedRequestPair: IApiRequestPair = {
            apiRequest: jest.fn(),
            selector: jest.fn().mockReturnValue(REQUEST_FAILED("oh no")),
        };

        const props = {
            ...defaultProps,
            requestPairs: [failedRequestPair],
        };
        subject = await renderWithHooks(<ApiRequester {...props} />);

        expect(subject.findByType(ErrorScreen).exists()).toBeTrue();
    });

    it("requests apis if any values in the state are not requested", async () => {
        const notRequestedPair: IApiRequestPair = {
            apiRequest: jest.fn(),
            selector: jest.fn().mockReturnValue(NOT_REQUESTED),
        };

        const props = {
            ...defaultProps,
            requestPairs: [notRequestedPair],
        };
        subject = await renderWithHooks(<ApiRequester {...props} />);

        expect(notRequestedPair.apiRequest).toHaveBeenCalled();
    });
});

describe("ApiRequesterWrapper", async () => {
    it("returns an ApiRequester component with the correct props", async () => {
        (useStore as jest.Mock).mockReturnValue(mockStore);

        const expectedComponent: React.FunctionComponent = () => <div />;
        const requestPairs: IApiRequestPair[] = [
            {
                apiRequest: jest.fn(),
                selector: jest.fn().mockReturnValue(REQUEST_SUCCEEDED("yes")),
            },
        ];

        const WrapperComponent = ApiRequesterWrapper(expectedComponent, requestPairs);

        const subject = await renderWithHooks(<WrapperComponent />);

        expect(subject.findByType(expectedComponent).exists()).toBeTrue();
    });
});