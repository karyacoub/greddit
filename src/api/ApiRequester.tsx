import * as React from "react";
import { useEffect, useState } from "react";
import { useStore, ConnectedComponent, useDispatch } from "react-redux";
import { IApplicationState } from "../store/applicationInitialState";
import { IApiRequestPair } from "./RequestPairs";
import { NOT_REQUESTED, IRequestState, REQUEST_SUCCEEDED, RequestStateTypes } from "./apiUtils";
import { LoadingSpinner } from "../components/common/LoadingSpinner";
import { ErrorScreen } from "../components/common/ErrorScreen";
import { View } from "react-native";

export interface IApiRequesterProps {
    requestPairs: IApiRequestPair[];
    children: React.ReactNode;
}

enum RequestPairsStatus {
    NONE_REQUESTED,
    SOME_REQUESTED,
    SOME_FAILED,
    ALL_SUCCEEDED,
}

export const ApiRequester: React.FunctionComponent<IApiRequesterProps> = (props) => {
    const [showLoading, setShowLoading] = useState<boolean>(true);
    const [showComponent, setShowComponent] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);

    const applicationState: IApplicationState = useStore().getState();
    const dispatch = useDispatch();

    function requestApis() {
        props.requestPairs.forEach((requestPair) => {
            if (requestPair.selector(applicationState).kind === RequestStateTypes.NOT_REQUESTED) {
                requestPair.apiRequest(dispatch);
            }
        })
    }

    function getRequestPairStatus(): RequestPairsStatus {
        const selectorValues: IRequestState<any>[] = props.requestPairs
            .map((requestPair: IApiRequestPair) => requestPair.selector(applicationState));

        if (selectorValues.every((selectorValue) => selectorValue.kind === RequestStateTypes.NOT_REQUESTED)) {
            return RequestPairsStatus.NONE_REQUESTED;
        } else if (selectorValues.every((selectorValue) => selectorValue.kind === RequestStateTypes.REQUEST_SUCCEEDED)) {
            return RequestPairsStatus.ALL_SUCCEEDED;
        } else if (selectorValues.some((selectorValue) => selectorValue.kind === RequestStateTypes.REQUEST_FAILED)) {
            return RequestPairsStatus.SOME_FAILED;
        } else {
            return RequestPairsStatus.SOME_REQUESTED;
        }
    }

    function setComponentDisplayed(requestPairStatus: RequestPairsStatus) {
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
        const requestPairStatus = getRequestPairStatus();

        setComponentDisplayed(requestPairStatus);
    }, [applicationState]);

    return <View>
            {renderLoadingComponent()}
            {renderComponent()}
            {renderError()}
        </View>;
};

export function ApiRequesterWrapper(Component: React.FunctionComponent, requestPairs: IApiRequestPair[]) {
    const Wrapper: React.FunctionComponent = () =>
         <ApiRequester requestPairs={requestPairs}>
            <Component />
        </ApiRequester>;

    return Wrapper;
}