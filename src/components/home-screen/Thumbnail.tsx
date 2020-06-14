import React from "react";
import { View, Image } from "react-native";
import HomeScreenStyles from "../../styles/HomeScreen.styles";

export interface IThumbnailProps {
    thumbnailUrl: string;
    thumbnailWidth?: number;
    thumbnailHeight?: number;
}

export const Thumbnail: React.FunctionComponent<IThumbnailProps> = (props) => {
    function renderThumbnail() {
        return props.thumbnailWidth && props.thumbnailHeight
            ? <Image testID="post-listing__thumbnail" source={{uri: props.thumbnailUrl}} style={HomeScreenStyles.postThumbnail}/>
            : <View testID="post-listing__default-thumbnail" style={HomeScreenStyles.defaultPostThumbnail}>
                {/* <FontAwesomeIcon icon="coffee" /> */}
            </View>;
    }

    return <View testID="post-listing__thumbnail-container" style={HomeScreenStyles.thumbnailContainer}>
        {renderThumbnail()}
    </View>;
};
