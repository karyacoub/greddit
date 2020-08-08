import * as React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { connect, useDispatch } from "react-redux";
import { ErrorScreen } from "../components/common/ErrorScreen";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import { IApplicationState } from "../store/applicationInitialState";
import { IRequestState, RequestStateTypes } from "./apiUtils";
import { IApiRequestPair } from "./RequestPairs";

export interface IApiRequesterPropsFromStore {
    applicationState: IApplicationState;
}

export interface IApiRequesterPropsFromParent {
    requestPairs: IApiRequestPair[];
    children: React.ReactNode;
}

export type IApiRequesterProps = IApiRequesterPropsFromStore & IApiRequesterPropsFromParent;

enum RequestPairsStatus {
    NONE_REQUESTED = "NONE_REQUESTED",
    SOME_REQUESTED = "SOME_REQUESTED",
    SOME_FAILED = "SOME_FAILED",
    ALL_SUCCEEDED = "ALL_SUCCEEDED",
}

export const ApiRequester: React.FunctionComponent<IApiRequesterProps> = (props) => {
    const [showLoading, setShowLoading] = useState<boolean>(true);
    const [showComponent, setShowComponent] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [requestPairStatus, setRequestPairStatus] = useState<RequestPairsStatus>(RequestPairsStatus.NONE_REQUESTED);

    const dispatch = useDispatch();

    function requestApis() {
        props.requestPairs.forEach((requestPair) => {
            if (requestPair.selector(props.applicationState).kind === RequestStateTypes.NOT_REQUESTED) {
                requestPair.apiRequest(dispatch);
            }
        });
    }

    function setStatus() {
        const selectorValues: IRequestState<any>[] = props.requestPairs
            .map((requestPair: IApiRequestPair) => requestPair.selector(props.applicationState));

        if (selectorValues.every((selectorValue) => selectorValue.kind === RequestStateTypes.NOT_REQUESTED)) {
            setRequestPairStatus(RequestPairsStatus.NONE_REQUESTED);
        } else if (selectorValues.every((selectorValue) => selectorValue.kind === RequestStateTypes.REQUEST_SUCCEEDED)) {
            setRequestPairStatus(RequestPairsStatus.ALL_SUCCEEDED);
        } else if (selectorValues.some((selectorValue) => selectorValue.kind === RequestStateTypes.REQUEST_FAILED)) {
            setRequestPairStatus(RequestPairsStatus.SOME_FAILED);
        } else {
            setRequestPairStatus(RequestPairsStatus.SOME_REQUESTED);
        }
    }

    function setComponentDisplayed() {
        if (requestPairStatus === RequestPairsStatus.NONE_REQUESTED || requestPairStatus === RequestPairsStatus.SOME_REQUESTED) {
            setShowLoading(true);
            setShowComponent(false);
            setShowError(false);

            requestApis();
        } else if (requestPairStatus === RequestPairsStatus.ALL_SUCCEEDED) {
            setShowLoading(false);
            setShowComponent(true);
            setShowError(false);
        } else if (requestPairStatus === RequestPairsStatus.SOME_FAILED) {
            setShowLoading(false);
            setShowComponent(false);
            setShowError(true);
        }
    }

    function renderLoadingComponent() {
        return showLoading
            ? <LoadingSpinner />
            : null;
    }

    function renderComponent() {
        return showComponent
            ? <View testID="api-requester__child">{props.children}</View>
            : null;
    }

    function renderError() {
        return showError
            ? <ErrorScreen />
            : null;
    }

    useEffect(() => {
        setStatus();

        setComponentDisplayed();
    }, []);

    useEffect(() => {
        setStatus();

        setComponentDisplayed();
    }, [props.applicationState]);

    return <View>
            {renderLoadingComponent()}
            {renderComponent()}
            {renderError()}
        </View>;
};

function mapStateToProps(state: IApplicationState): IApiRequesterPropsFromStore {
    return {
        applicationState: state,
    };
}

export const ConnectedRequester = connect(mapStateToProps)(ApiRequester);

export function ApiRequesterWrapper(Component: React.FunctionComponent, requestPairs: IApiRequestPair[]) {
    const Wrapper: React.FunctionComponent = () =>
         <ConnectedRequester requestPairs={requestPairs}>
            <Component />
        </ConnectedRequester>;

    return Wrapper;
}