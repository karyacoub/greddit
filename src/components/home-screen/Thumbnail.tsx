import React from "react";
import { View, Image } from "react-native";
import HomeScreenStyles from "../../styles/HomeScreen.styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faUnlink } from "@fortawesome/free-solid-svg-icons"
import { Colors } from "../../styles/Colors";

export interface IThumbnailProps {
    thumbnailUrl: string;
    thumbnailWidth?: number;
    thumbnailHeight?: number;
}

export const Thumbnail: React.FunctionComponent<IThumbnailProps> = (props) => {
    const hasThumbnail = props.thumbnailUrl !== "self";

    function renderThumbnail() {
        if (!hasThumbnail) {
            return null;
        }

        return props.thumbnailUrl !== "default"
            ? <Image testID="post-listing__thumbnail" source={{uri: props.thumbnailUrl}} style={HomeScreenStyles.postThumbnail}/>
            : <View testID="post-listing__default-thumbnail" style={HomeScreenStyles.defaultPostThumbnail}>
                <FontAwesomeIcon icon={faUnlink} color={Colors.INDIGO_DYE} size={30}/>
            </View>;
    }

    return <View testID="post-listing__thumbnail-container" style={HomeScreenStyles.thumbnailContainer}>
        {renderThumbnail()}
    </View>;
};
