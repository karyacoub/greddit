import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Colors";

export const {width: screenWidth, height: screenHeight} = Dimensions.get("window");

export default StyleSheet.create({
    mainContainer: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: Colors.INDIGO_DYE,
    },

    Text: {
        color: Colors.WHITE,
    }
});