import React from "react";
import { Text, TextProps } from "react-native";
import MainStylesheet from "../../styles/MainStylesheet";

export const StyledText: React.FunctionComponent<TextProps> = (props) => {
    const textStyle = [
        MainStylesheet.Text,
        props.style,
    ];

    return <Text {...props} style={textStyle}>
        {props.children}
    </Text>
};