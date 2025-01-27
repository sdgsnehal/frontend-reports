import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface MerchantState {
  id: string;
  name: string;
}
const initialState: MerchantState = {
  id: "67950e64b58a31269ec47bdc",
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
