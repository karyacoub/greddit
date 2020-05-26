import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NOT_REQUESTED, REQUESTED, REQUEST_FAILED, REQUEST_SUCCEEDED, IRequestState } from "../../api/apiUtils";
import { requestPostListing } from "../../api/PostListingApi";
import { IListing, Listing } from "../../models/Listing.model";

export const HomeScreen: React.FunctionComponent = () => {
    const [currentPosts, setCurrentPosts] = useState<IRequestState<IListing[]>>(NOT_REQUESTED);

    useEffect(() => {
        setCurrentPosts(REQUESTED);

        requestPostListing()
            .then((posts: Listing[]) => {
                setCurrentPosts(REQUEST_SUCCEEDED(posts));
            }).catch((error) => {
                setCurrentPosts(REQUEST_FAILED(error));
            });
    }, []);

    function renderCurrentPosts() {
        return currentPosts.data
            ? currentPosts.data.map((post: IListing, idx: number) => 
                <Text key={idx}>{post.title}</Text>)
            : null;
    }

    return <View>
        {renderCurrentPosts()}
    </View>;
};

HomeScreen.displayName = "HomeScreen";