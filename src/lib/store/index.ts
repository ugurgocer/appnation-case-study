import { configureStore } from "@reduxjs/toolkit";

import searchHistoryReducer from "./searchHistorySlice";
import metricSliceReducer from "./metricSlice";
import toasterSliceReducer from "./toasterSlice";

export const store = configureStore({
    reducer: {
        searchHistory: searchHistoryReducer,
        metric: metricSliceReducer,
        toaster: toasterSliceReducer
    },
});

export type IStore = typeof store;
export type IDispatch = IStore['dispatch'];
export type IRootState = ReturnType<IStore['getState']>;