import { StyleSheet, Dimensions } from "react-native";
import { Colors, PRIMARY_COLOR } from "./Colors";

export const {width: screenWidth, height: screenHeight} = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: PRIMARY_COLOR,
    },

    Text: {
        color: Colors.WHITE,
    }
});