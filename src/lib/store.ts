import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./features/settings/settings-slice";
import autoResponseSlice from "./features/auto-response/auto-response-slice";
import authSlice from "./features/auth/auth-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      settings: settingsSlice,
      autoResponse: autoResponseSlice,
      auth: authSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
