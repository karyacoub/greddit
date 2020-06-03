import { StyleSheet } from "react-native";
import fontStyles from "./fontStyles";
import { Colors } from "./Colors";

const thumbnailDimensions = 100;

export default StyleSheet.create({
    postListingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        // width: "70%"
        flex: 1,
    },

    thumbnailContainer: {
        justifyContent: "center",
        marginLeft: 10,
        shadowColor: Colors.BLACK,
        shadowOpacity: 1,
        shadowOffset: {
            width: thumbnailDimensions,
            height: thumbnailDimensions,
        },
    },

    postThumbnail: {
        width: thumbnailDimensions,
        height: thumbnailDimensions,
    },

    postScore: {

    },

    postTitle: {
        ...fontStyles.header,
        marginTop: 10,
        marginBottom: 10,
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