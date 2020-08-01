import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { HomeScreenApi } from "../../api/HomeScreenApi";
import { IListing, Listing } from "../../models/Listing.model";
import { PostListing } from "./PostListing";
import { StyledText } from "../common/StyledText";

export const HomeScreen: React.FunctionComponent = () => {
    const [currentPosts, setCurrentPosts] = useState<IListing[]>([]);
    const [lastPostName, setLastPostName] = useState<string | undefined>()

    const showPostIndexes = false;

    function requestPosts() {
        HomeScreenApi.requestPostListings(lastPostName)
            .then((posts: Listing[]) => {
                setCurrentPosts(currentPosts.concat(posts));
                setLastPostName(posts[posts.length - 1].name);
            }).catch((error) => {
                console.error("Error: could not retrive posts.", error);
            });
    }

    function renderPost({item, index}: {item: IListing, index: number}) {
        return <View>
                {showPostIndexes ? <StyledText>{index}</StyledText> : null /* for debugging */}
                <PostListing listing={item} key={item.name} />
            </View>;
    }

    useEffect(requestPosts, []);

    return <FlatList data={currentPosts}
                     keyExtractor={(_, idx: number) => `${idx}`}
                     onEndReached={requestPosts}
                     renderItem={renderPost} />;
};

HomeScreen.displayName = "HomeScreen";