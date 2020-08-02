import * as React from "react";
import { View } from "react-native";
import { StyledText } from "./StyledText";

export const ErrorScreen: React.FunctionComponent = () => {
    return <View>
        <StyledText>
            Error!
        </StyledText>
    </View>
};

ErrorScreen.displayName = "ErrorScreen";