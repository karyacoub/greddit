import React from "react";
import mainStyles from "../../styles/MainStylesheet";
import { View } from "react-native";
import { HomeScreen } from "../home-screen/HomeScreen";

export const Root: React.FunctionComponent = () => {
    return <View style={mainStyles.mainContainer}>
        <HomeScreen />
    </View>;
};