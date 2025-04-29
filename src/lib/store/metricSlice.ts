import { createSlice } from "@reduxjs/toolkit";

interface MetricState {
  selected: 'C' | 'F';
}

const initialState: MetricState = {
  selected: 'C'
};

const MetricSlice = createSlice({
  name: "Metric",
  initialState,
  reducers: {
    toggle: (state) => {
        state.selected = state.selected == 'C' ? 'F' : 'C'
    }
  },
});

export const { toggle } = MetricSlice.actions;

export default MetricSlice.reducer;
