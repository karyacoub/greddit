import * as React from "react";
import { ImagePropTypes } from "react-native";
import { IApiRequestPair } from "./RequestPairs";

export interface IApiRequesterProps {
    requestPairs: IApiRequestPair[];
    children: React.ReactNode;
}

export const ApiRequester: React.FunctionComponent<IApiRequesterProps> = (props) => {
    return <span>{props.children}</span>;
}

export function ApiRequesterWrapper(Component: React.FunctionComponent, requestPairs: IApiRequestPair[]) {
    return <ApiRequester requestPairs={requestPairs}>
        <Component />
    </ApiRequester>;
}