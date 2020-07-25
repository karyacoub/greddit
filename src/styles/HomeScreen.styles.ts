import { StyleSheet } from "react-native";
import fontStyles from "./fontStyles";
import { Colors, BACKGROUND_COLOR, POST_LISTING_COLOR, LINK_COLOR, ACTION_BAR_COLOR } from "./Colors";

export const thumbnailDimensions = 100;

export default StyleSheet.create({
    postListingContainer: {
        margin: 5,
    },

    postListing: {
        backgroundColor: POST_LISTING_COLOR,
        padding: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    postListingRow: {
        flexDirection: "row",
    },

    postListingActionBar: {
        backgroundColor: ACTION_BAR_COLOR,
        padding: 10,
        justifyContent: "center",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
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
        borderColor: BACKGROUND_COLOR,
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