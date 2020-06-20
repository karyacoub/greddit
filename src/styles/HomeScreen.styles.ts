import { StyleSheet } from "react-native";
import fontStyles from "./fontStyles";
import { Colors } from "./Colors";

export const thumbnailDimensions = 100;

export default StyleSheet.create({
    postListingContainer: {
        flexDirection: "row",
        margin: 5,
        padding: 10,
        backgroundColor: Colors.METALLIC_SEAWEED,
        borderRadius: 4,
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
        shadowOpacity:10.5,
    },

    postTitleContainer: {
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
    },

    postThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
        borderColor: Colors.INDIGO_DYE,
        backgroundColor: Colors.METALLIC_SEAWEED,
        borderRadius: 4,
        borderWidth: 4,
    },

    defaultPostThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
        borderColor: Colors.INDIGO_DYE,
        backgroundColor: Colors.METALLIC_SEAWEED,
        borderRadius: 4,
        borderWidth: 4,
        justifyContent: "center",
        alignItems: "center"
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