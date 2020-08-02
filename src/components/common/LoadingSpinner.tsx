import * as React from "react";
import { View } from "react-native";
import { StyledText } from "./StyledText";

export const LoadingSpinner: React.FunctionComponent = () => {
    return <View>
        <StyledText>Loading...</StyledText>
    </View>;
};