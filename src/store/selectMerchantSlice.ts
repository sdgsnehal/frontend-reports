import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface MerchantState {
  id: number;
  name: string;
}
const initialState: MerchantState = {
  id: 1,
  name: "Kavas",
};
export const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {
    selectMerchant: (state, action: PayloadAction<MerchantState>) => {
      return action.payload;
    },
  },
});
export const { selectMerchant } = merchantSlice.actions;
export default merchantSlice.reducer;
