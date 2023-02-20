import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { todolistApi } from "./todolistApi";

export const makeStore = () =>
  configureStore({
    reducer: {
      [todolistApi.reducerPath]: todolistApi.reducer,
    },
    middleware: (gDM) => gDM().concat(todolistApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
