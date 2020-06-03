import { StyleSheet } from "react-native";
import fontStyles from "./fontStyles";

const thumbnailDimensions = 100;

export default StyleSheet.create({
    postListingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        minHeight: 100,
        margin: 10,
    },

    postListingRow: {
        flexDirection: "row",
    },

    postInfo: {
        
    },

    thumbnailContainer: {
        justifyContent: "center",
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
        ...fontStyles.header,
        textAlign: "justify",
        flex: 1,
    },

    postAuthor: {
        ...fontStyles.bold,
    },

    postSubreddit: {
        ...fontStyles.bold,
    }
});