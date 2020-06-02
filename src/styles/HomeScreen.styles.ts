import { StyleSheet } from "react-native";

const thumbnailDimensions = 105;

export default StyleSheet.create({
    postListingContainer: {
        flexDirection: "row",
    },

    postListingSection: {
        flexDirection: "row",
        width: "100%",
    },

    postInfoWithThumbnail: {
        width: "75%",
        fontWeight: "700",
    },

    postInfo: {
        width: "100%",
    },

    thumbnailContainer: {
        width: "25%",
    },

    postThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
    },

    postScore: {
        width: 50,
        marginRight: 10,
    },

    postTitle: {
        flex: 1,
    },

    postAuthor: {
        marginRight: 10,
    },
});