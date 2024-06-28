import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { getVideoDetails } from "../../store/reducers/getVideoDetails";
import { getRecommendedVideo } from "../../store/reducers/getRecommendedVideo";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideo: []
};

const youtubeSlice = createSlice({
    name: "youtubeSlice",
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearch: (state) => {
            state.searchTerm = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            if(action.payload && action.payload.parsedData) {
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
        builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
            if(action.payload && action.payload.parsedData) {
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
                state.searchTerm = action.payload.searchTerm;
            }
        })
        builder.addCase(getRecommendedVideo.fulfilled, (state, action) => {
            if(action.payload && action.payload.parsedData) {
                state.recommendedVideo = action.payload.parsedData;
            }
        })
        builder.addCase(getVideoDetails.fulfilled, (state, action) => {
            if(action.payload && action.payload.parsedData) {
                state.currentPlaying = action.payload.currentPlaying;
            }
        })
    }
});

export const { clearVideos, changeSearchTerm, clearSearch } = youtubeSlice.actions;
export default youtubeSlice.reducer;
