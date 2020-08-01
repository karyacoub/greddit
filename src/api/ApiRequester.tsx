import * as React from "react";
import { useEffect } from "react";
import { IApiRequestPair } from "./RequestPairs";
import * as Redux from "redux";
import { connect, useStore } from "react-redux";
import { IApplicationState } from "../store/applicationInitialState";

export interface IApiRequesterProps {
    requestPairs: IApiRequestPair[];
    children: React.ReactNode;
}

enum RequestPairsStatus {
    NONE_REQUESTED,
    SOME_REQUESTED,
    ALL_REQUESTED,
    ALL_SUCCEEDED,
    ALL_FAILED,
}

export const ApiRequester: React.FunctionComponent<IApiRequesterProps> = (props) => {
    const applicationState: IApplicationState = useStore().getState();
    
    useEffect(() => {
        const selectorValues: RequestPairsStatus[] = props.requestPairs
            .map((requestPair: IApiRequestPair) => requestPair.selector(applicationState));
    });
    
    return <span>{props.children}</span>;
}

export function ApiRequesterWrapper(Component: React.FunctionComponent, requestPairs: IApiRequestPair[]) {
    return <ApiRequester requestPairs={requestPairs}>
        <Component />
    </ApiRequester>;
}