import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { requestPostListing } from "../../api/PostListingApi";
import { IListing, Listing } from "../../models/Listing.model";

export const HomeScreen: React.FunctionComponent = () => {
    const [currentPosts, setCurrentPosts] = useState<IListing[]>([]);
    const [lastPostName, setLastPostName] = useState<string | undefined>()

    function requestPosts() {
        requestPostListing(lastPostName)
            .then((posts: Listing[]) => {
                setCurrentPosts(currentPosts.concat(posts));
                setLastPostName(posts[posts.length - 1].name);
            }).catch((error) => {
                console.error("Error: could not retrive posts.", error);
            });
    }

    function renderPost({item, index}: any) {
        return <Text key={index}>{item.title}</Text>;
    }

    useEffect(requestPosts, []);

    return <View style={{width: "100%", height: "100%"}}>
        <FlatList data={currentPosts}
                  keyExtractor={(_, idx: number) => `${idx}`}
                  onEndReached={requestPosts}
                  renderItem={renderPost} />
    </View>;
};

HomeScreen.displayName = "HomeScreen";