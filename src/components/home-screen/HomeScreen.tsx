import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { requestPostListing } from "../../api/PostListingApi";
import { IListing, Listing } from "../../models/Listing.model";
import { PostListing } from "./PostListing";

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

    function renderPost({item}: {item: IListing}) {
        return <PostListing listing={item} key={item.name} />;
    }

    useEffect(requestPosts, []);

    return <FlatList data={currentPosts}
                  keyExtractor={(_, idx: number) => `${idx}`}
                  onEndReached={requestPosts}
                  renderItem={renderPost} />;
};

HomeScreen.displayName = "HomeScreen";