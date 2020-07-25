import { StyleSheet, Dimensions } from "react-native";
import { Colors, BACKGROUND_COLOR } from "./Colors";

export const {width: screenWidth, height: screenHeight} = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: BACKGROUND_COLOR,
    },

    Text: {
        color: Colors.WHITE,
    }
});