import React from "react";
import { Image, View } from "react-native";
import { IListing } from "../../models/Listing.model";
import styles from "../../styles/HomeScreen.styles";
import { StyledText } from "../common/StyledText";

export interface IPostListingProps {
    listing: IListing;
}

export const PostListing: React.FunctionComponent<IPostListingProps> = (props) => {
    function renderThumbnail() {
        return props.listing.thumbnail_width && props.listing.thumbnail_height
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
                    <StyledText testID="post-listing__author" style={styles.postAuthor}>{`u/${props.listing.author}`}</StyledText>
                    <StyledText> in </StyledText>
                    <StyledText testID="post-listing__subreddit" style={styles.postSubreddit}>{`r/${props.listing.subreddit}`}</StyledText>
                </View>
                <View style={styles.postListingRow}>
                    <StyledText testID="post-listing__title" style={styles.postTitle}>{props.listing.title}</StyledText>
                </View>
                <View testID="post-listing__action-bar" style={[styles.postListingRow, styles.postListingActionBar]}>
                    <StyledText testID="post-listing__score" style={styles.postScore}>{props.listing.score}</StyledText>
                </View>
            </View>
            {renderThumbnail()}
        </View>;
}