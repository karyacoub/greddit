import { IHomeScreenState, homeScreenInitialState } from "../components/home-screen/HomeScreen.reducer";

export interface IApplicationInitialState {
    currentPostsState: IHomeScreenState;
}

export const applicationInitialState: IApplicationInitialState = {
    currentPostsState: homeScreenInitialState,
};