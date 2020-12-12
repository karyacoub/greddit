import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { HomeScreenApi } from "../../api/HomeScreenApi";
import { IListing, Listing } from "../../models/Listing.model";
import { PostListing } from "./PostListing";
import { StyledText } from "../common/StyledText";
import { connect, useDispatch } from "react-redux";
import { IApplicationState } from "../../store/applicationInitialState";
import { displayedPostsSelector } from "../../store/mainReducerSelectors";
import { ApiRequesterWrapper } from "../../api/ApiRequester";
import { displayedPostsRequestPair } from "../../api/RequestPairs";
import { clearPostListings, HomeScreenActions, requestPostListings } from "./HomeScreen.actions";

export interface IHomeScreenPropsFromStore {
    displayedPosts: IListing[];
}

let lastPostName;

export const HomeScreen: React.FunctionComponent<IHomeScreenPropsFromStore> = (props) => {
    const [currentPosts, setCurrentPosts] = useState<IListing[]>(props.displayedPosts);
    // const [lastPostName, setLastPostName] = useState<string | undefined>()

    const dispatch = useDispatch();

    const showPostIndexes = false;

    // function requestPosts() {
    //     HomeScreenApi.requestPostListings(lastPostName)
    //         .then((posts: Listing[]) => {
    //             setCurrentPosts(currentPosts.concat(posts));
    //             setLastPostName(posts[posts.length - 1].name);
    //         }).catch((error) => {
    //             console.error("Error: could not retrive posts.", error);
    //         });
    // }

    function renderPost({item, index}: {item: IListing, index: number}) {
        return <View>
                {showPostIndexes ? <StyledText>{index}</StyledText> : null /* for debugging */}
                <PostListing listing={item} key={item.name} />
            </View>;
    }

    function handleEndReached() {
        lastPostName = props.displayedPosts[props.displayedPosts.length - 1].name;

        requestPostListings(lastPostName);
    }

    useEffect(() => {
        lastPostName = props.displayedPosts[props.displayedPosts.length - 1].name;
    }, []);

    return <FlatList data={props.displayedPosts}
                     keyExtractor={(_, idx: number) => `${idx}`}
                     onEndReached={handleEndReached}
                     renderItem={renderPost} />;
};

export function mapStateToProps(state: IApplicationState): IHomeScreenPropsFromStore {
    return {
        displayedPosts: displayedPostsSelector(state).data!,
    };
}

const connectedComponent = connect(mapStateToProps)(HomeScreen);

export default ApiRequesterWrapper(
    connectedComponent, [
        displayedPostsRequestPair(lastPostName),
    ],
);