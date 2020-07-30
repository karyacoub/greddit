import * as React from "react";
import { IApiRequestPair } from "./RequestPairs";

export const ApiRequester: React.FunctionComponent = () => {
    return null;
}

export function ApiRequesterWrapper(Component: React.FunctionComponent, requestPairs: IApiRequestPair[]) {
    return <ApiRequester>
        <Component />
    </ApiRequester>
}