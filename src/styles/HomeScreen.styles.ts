import { StyleSheet } from "react-native";
import fontStyles from "./fontStyles";
import { Colors } from "./Colors";

const thumbnailDimensions = 100;

export default StyleSheet.create({
    postListingContainer: {
        flexDirection: "row",
        margin: 5,
        padding: 10,
        backgroundColor: Colors.METALLIC_SEAWEED,
    },

    postListingRow: {
        flexDirection: "row",
    },

    postListingActionBar: {
        
    },

    postInfo: {
        flex: 1,
    },

    thumbnailContainer: {
        justifyContent: "center",
    },

    postTitleContainer: {
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
    },

    postThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
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
        color: Colors.MINT,
    },

    postSubreddit: {
        ...fontStyles.bold,
        color: Colors.MINT,
    }
});