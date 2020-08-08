import "jest-extended";
import * as React from "react";
import { useDispatch } from "react-redux";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";
import { applicationInitialState } from "../../store/applicationInitialState";
import { renderWithHooks, TestRendererWithHooks } from "../../testUtils";
import { ApiRequester, IApiRequesterProps } from "../ApiRequester";
import { NOT_REQUESTED } from "../apiUtils";
import { IApiRequestPair } from "../RequestPairs";

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
        applicationState: applicationInitialState,
        children: defaultChild,
    }
    
    let dispatch = jest.fn();
    (useDispatch as jest.Mock) = jest.fn();

    beforeEach(async () => {
        dispatch = jest.fn();
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

    // it("renders child component when all values in the state are successes", async () => {
    //     dispatch = jest.fn();
    //     (useDispatch as jest.Mock).mockReturnValue(dispatch);

    //     const successRequestPair: IApiRequestPair = {
    //         apiRequest: jest.fn(),
    //         selector: jest.fn().mockReturnValue(REQUEST_SUCCEEDED("yes")),
    //     };

    //     const props = {
    //         ...defaultProps,
    //         requestPairs: [successRequestPair],
    //     };
    //     subject = await renderWithHooks(<ApiRequester {...props} />);

    //     expect(subject.findByTestId("api-requester__child").exists()).toBeTrue();
    // });

    // it("renders error screen if any values in the state are failures", async () => {
    //     const failedRequestPair: IApiRequestPair = {
    //         apiRequest: jest.fn(),
    //         selector: jest.fn().mockReturnValue(REQUEST_FAILED("oh no")),
    //     };

    //     const props = {
    //         ...defaultProps,
    //         requestPairs: [failedRequestPair],
    //     };
    //     subject = await renderWithHooks(<ApiRequester {...props} />);

    //     expect(subject.findByType(ErrorScreen).exists()).toBeTrue();
    // });

    // it("requests apis if any values in the state are not requested", async () => {
    //     const notRequestedPair: IApiRequestPair = {
    //         apiRequest: jest.fn(),
    //         selector: jest.fn().mockReturnValue(NOT_REQUESTED),
    //     };

    //     const props = {
    //         ...defaultProps,
    //         requestPairs: [notRequestedPair],
    //     };
    //     subject = await renderWithHooks(<ApiRequester {...props} />);

    //     expect(notRequestedPair.apiRequest).toHaveBeenCalled();
    // });
});

// describe("ApiRequesterWrapper", async () => {
//     it("returns an ApiRequester component with the correct props", async () => {
//         const expectedComponent: React.FunctionComponent = () => <div />;
//         const requestPairs: IApiRequestPair[] = [
//             {
//                 apiRequest: jest.fn(),
//                 selector: jest.fn(),
//             },
//         ];

//         const mockStore = createMockStore<IApplicationState>()();

//         const WrapperComponent = ApiRequesterWrapper(expectedComponent, requestPairs);

//         const subject = await renderWithHooks(
//             <Provider store={mockStore}>
//                 <WrapperComponent />
//             </Provider>
//         );

//         console.log("=============> ", subject.debug());

//         expect(subject.findByType(ConnectedRequester).exists()).toBeTrue();
//     });
// });