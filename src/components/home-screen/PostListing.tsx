import React from "react";
import { View, Text, ToolbarAndroid } from "react-native";
import { IListing } from "../../models/Listing.model";
import styles from "../../styles/HomeScreen.styles";
import { StyledText } from "../common/StyledText";
import { Thumbnail } from "./Thumbnail";

export interface IPostListingProps {
    listing: IListing;
}

export const PostListing: React.FunctionComponent<IPostListingProps> = (props) => {
    const hasThumbnail = props.listing.thumbnail !== "self";

    return <View style={styles.postListingContainer}>
            <View style={styles.postInfo}>
                <View style={styles.postListingRow}>
                    <StyledText testID="post-listing__author" style={styles.postAuthor}>{`u/${props.listing.author}`}</StyledText>
                    <StyledText> in </StyledText>
                    <StyledText testID="post-listing__subreddit" style={styles.postSubreddit}>{`r/${props.listing.subreddit}`}</StyledText>
                </View>
                <View style={[styles.postListingRow, styles.postTitleContainer]}>
                    <StyledText testID="post-listing__title" style={hasThumbnail ? styles.postTitleWithThumbnail : styles.postTitle}>{props.listing.title}</StyledText>
                    <Thumbnail thumbnailUrl={props.listing.thumbnail} 
                               thumbnailWidth={props.listing.thumbnailWidth} 
                               thumbnailHeight={props.listing.thumbnailHeight} />
                </View>
                <View testID="post-listing__action-bar" style={[styles.postListingRow, styles.postListingActionBar]}>
                    <StyledText testID="post-listing__score" style={styles.postScore}>{props.listing.score}</StyledText>
                </View>
            </View>
        </View>;
}