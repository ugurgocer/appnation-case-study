import { configureStore } from "@reduxjs/toolkit";

import searchHistoryReducer from "./searchHistorySlice";


export const store = configureStore({
    reducer: {
        searchHistory: searchHistoryReducer
    },
});

export type IStore = typeof store;
export type IDispatch = IStore['dispatch'];
export type IRootState = ReturnType<IStore['getState']>;