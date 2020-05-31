import React from "react";
import { IListing } from "../../models/Listing.model";
import { View, Text } from "react-native";

export interface IPostListingProps {
    listing: IListing;
}

export const PostListing: React.FunctionComponent<IPostListingProps> = (props) => {
    return <View>
        <Text testID="post-listing__title">{props.listing.title}</Text>
        <Text testID="post-listing__score">{props.listing.score}</Text>
    </View>;
}