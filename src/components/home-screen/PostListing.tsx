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

    function getPostInfoStyle() {
        return props.listing.thumbnail.includes("http") ? styles.postInfoWithThumbnail : styles.postInfo;
    }

    return <View style={styles.postListingContainer}>
            <View style={getPostInfoStyle()}>
                <View style={styles.postListingSection}>
                    <Text testID="post-listing__score" style={styles.postScore}>{props.listing.score}</Text>
                    <Text testID="post-listing__title" style={styles.postTitle}>{props.listing.title}</Text>
                </View>
                <View style={styles.postListingSection}>
                    <Text testID="post-listing__author" style={styles.postAuthor}>{`/u/${props.listing.author}`}</Text>
                    <Text testID="post-listing__subreddit">{`/r/${props.listing.subreddit}`}</Text>
                </View>
            </View>
            {renderThumbnail()}
        </View>;
}