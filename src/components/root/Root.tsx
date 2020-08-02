import React from "react";
import mainStyles from "../../styles/MainStylesheet";
import { View } from "react-native";
import HomeScreen from "../home-screen/HomeScreen";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { mainReducerMap } from "../../store/mainReducerMap";
import { applicationInitialState } from "../../store/applicationInitialState";

const store = createStore(combineReducers(mainReducerMap), applicationInitialState);

export const Root: React.FunctionComponent = () => {
    return <Provider store={store}>
        <View style={mainStyles.mainContainer}>
            <HomeScreen />
        </View>
    </Provider>;
};