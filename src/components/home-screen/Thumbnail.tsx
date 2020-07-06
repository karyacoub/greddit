import { faCommentSlash, faExclamationTriangle, faUnlink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, View } from "react-native";
import { Colors } from "../../styles/Colors";
import HomeScreenStyles from "../../styles/HomeScreen.styles";

export interface IThumbnailProps {
    domain: string;
    thumbnailUrl: string;
    thumbnailWidth?: number;
    thumbnailHeight?: number;
}

export const Thumbnail: React.FunctionComponent<IThumbnailProps> = (props) => {
    const hasThumbnail = !props.domain.includes("self");
    const isDefaultThumbnail = props.thumbnailUrl === "default";
    const isNsfwThumbnail = props.thumbnailUrl === "nsfw" && props.thumbnailHeight && props.thumbnailWidth;
    const isSpoilerThumbnail = props.thumbnailUrl === "spoiler" && props.thumbnailHeight && props.thumbnailWidth;
    
    function renderThumbnail() {
        if (!hasThumbnail) {
            return null;
        } else if (isDefaultThumbnail) {
            return <View testID="post-listing__default-thumbnail" style={HomeScreenStyles.postThumbnail}>
                <FontAwesomeIcon icon={faUnlink} color={Colors.OVERLAY_GRAY} size={30}/>
            </View>;
        } else if (isNsfwThumbnail) {
            return <View testID="post-listing__nsfw-thumbnail" style={HomeScreenStyles.nsfwThumbnail}>
                <FontAwesomeIcon icon={faExclamationTriangle} color={Colors.NSFW_RED} size={30}/>
            </View>;
        } else if (isSpoilerThumbnail) {
            return <View testID="post-listing__spoiler-thumbnail" style={HomeScreenStyles.nsfwThumbnail}>
                <FontAwesomeIcon icon={faCommentSlash} color={Colors.NSFW_RED} size={30}/>
            </View>;
        } else {
            return <Image testID="post-listing__thumbnail" source={{uri: props.thumbnailUrl}} style={HomeScreenStyles.postThumbnail}/>;
        }
    }

    return <View testID="post-listing__thumbnail-container" style={HomeScreenStyles.thumbnailContainer}>
        {renderThumbnail()}
    </View>;
};
