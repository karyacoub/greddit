import { IHomeScreenState, homeScreenInitialState } from "../components/home-screen/HomeScreen.reducer";

export interface IApplicationState {
    currentPostsState: IHomeScreenState;
}

export const applicationInitialState: IApplicationState = {
    currentPostsState: homeScreenInitialState,
};