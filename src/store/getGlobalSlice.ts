import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GlobalProps } from "./interfaces/interface";

const initialState: GlobalProps[] = [];
export const globalSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    GlobalData: (_state, action: PayloadAction<GlobalProps[]>) => {
      return action.payload;
    },
  },
});
export const { GlobalData } = globalSlice.actions;
export default globalSlice.reducer;
