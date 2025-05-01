import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import IToast from "../types/IToast";

interface ToasterState {
  toasts: IToast[];
}

const initialState: ToasterState = {
  toasts: []
};

const ToasterSlice = createSlice({
  name: "Toaster",
  initialState,
  reducers: {
    showToast: {
        reducer(state, action: PayloadAction<IToast>) {
          state.toasts.push(action.payload)
        },
        prepare(message: string, type: IToast['type'] = 'error', duration = 3000) {
          return {
            payload: {
              id: nanoid(),
              message,
              type,
              duration
            } as IToast
          }
        }
      },
      removeToast(state, action: PayloadAction<string>) {
        state.toasts = state.toasts.filter(t => t.id !== action.payload)
      }
  },
});

export const { showToast, removeToast } = ToasterSlice.actions;

export default ToasterSlice.reducer;
