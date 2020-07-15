import { StyleSheet } from "react-native";
import fontStyles from "./fontStyles";
import { Colors, PRIMARY_COLOR, SECONDARY_COLOR, LINK_COLOR } from "./Colors";

export const thumbnailDimensions = 100;

export default StyleSheet.create({
    postListingContainer: {
        flexDirection: "row",
        margin: 5,
        padding: 10,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 4,
    },

    postListingRow: {
        flexDirection: "row",
        backgroundColor: SECONDARY_COLOR,
    },

    postListingActionBar: {
        
    },

    postInfo: {
        flex: 1,
    },

    thumbnailContainer: {
        justifyContent: "center",
        shadowOpacity: 10.5,
    },

    postTitleContainer: {
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
    },

    postThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
        borderColor: PRIMARY_COLOR,
        backgroundColor: Colors.OVERLAY_BLACK,
        borderRadius: 4,
        borderWidth: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    nsfwThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
        borderColor: Colors.NSFW_RED,
        backgroundColor: Colors.OVERLAY_BLACK,
        borderRadius: 4,
        borderWidth: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    postScore: {

    },

    postTitle: {
        ...fontStyles.header,
    },

    postTitleWithThumbnail: {
        ...fontStyles.header,
        marginTop: 10,
        marginBottom: 10,
        width: "70%",
    },

    postAuthor: {
        ...fontStyles.bold,
        color: LINK_COLOR
    },

    postSubreddit: {
        ...fontStyles.bold,
        color: LINK_COLOR,
    }
});