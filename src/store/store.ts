import { configureStore } from "@reduxjs/toolkit";
import merchantReducer from "../store/selectMerchantSlice";
import dashboardDataSlice from "../store/getDashboardSlice";
import globalDataSlice from "../store/getGlobalSlice";

export const store = configureStore({
  reducer: {
    merchant: merchantReducer,
    dashboardData: dashboardDataSlice,
    globalData: globalDataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
