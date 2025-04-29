import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ILocation from "../types/ILocation";

interface SearchHistoryState {
  items: ILocation[];
}

const initialState: SearchHistoryState = {
  items: []
};

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState,
  reducers: {
    addHistoryItem: (state, action: PayloadAction<ILocation>) => {
        const location = action.payload;
        const updated = [location, ...state.items.filter((l) => l.id !== location.id)].slice(0, 5);
        state.items = updated;
        localStorage.setItem("searchHistory", JSON.stringify(updated));
    },
    loadLocalStorage: (state) => {
        state.items = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    }
  },
});

export const { addHistoryItem, loadLocalStorage } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
