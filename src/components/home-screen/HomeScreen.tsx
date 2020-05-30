import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { NOT_REQUESTED, REQUESTED, REQUEST_FAILED, REQUEST_SUCCEEDED, IRequestState, RequestStateTypes } from "../../api/apiUtils";
import { requestPostListing } from "../../api/PostListingApi";
import { IListing, Listing, IListingEntity } from "../../models/Listing.model";

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

    function renderPost({item, index}: any) {
        console.log(item);
        return <Text key={index}>{item.title}</Text>;
    }

    return <View style={{width: "100%", height: "100%"}}>
        <FlatList data={currentPosts.data ? currentPosts.data : []}
                  keyExtractor={(listing: IListing) => listing.name}
                  renderItem={renderPost} />
    </View>;
};

HomeScreen.displayName = "HomeScreen";