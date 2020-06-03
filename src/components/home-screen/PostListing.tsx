import React from "react";
import { Text, View, Image } from "react-native";
import { IListing } from "../../models/Listing.model";
import styles from "../../styles/HomeScreen.styles";

export interface IPostListingProps {
    listing: IListing;
}

export const PostListing: React.FunctionComponent<IPostListingProps> = (props) => {
    function renderThumbnail() {
        return props.listing.thumbnail.includes("http")
            ? <View testID="post-listing__thumbnail-container" style={styles.thumbnailContainer}>
                <Image testID="post-listing__thumbnail" 
                        source={{uri: props.listing.thumbnail}} 
                        style={styles.postThumbnail}/> 
            </View>
            : null;
    }

    return <View style={styles.postListingContainer}>
            <View style={styles.postInfo}>
                <View style={styles.postListingRow}>
                    <Text testID="post-listing__author" style={styles.postAuthor}>{`u/${props.listing.author}`}</Text>
                    <Text> in </Text>
                    <Text testID="post-listing__subreddit" style={styles.postSubreddit}>{`r/${props.listing.subreddit}`}</Text>
                </View>
                <View style={styles.postListingRow}>
                    <Text testID="post-listing__title" style={styles.postTitle}>{props.listing.title}</Text>
                </View>
                <View testID="post-listing__action-bar" style={styles.postListingRow}>
                    <Text testID="post-listing__score" style={styles.postScore}>{props.listing.score}</Text>
                </View>
            </View>
            {renderThumbnail()}
        </View>;
}