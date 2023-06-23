import {
  configureStore,
  ThunkAction,
  Action,
  CombinedState,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import reducer, { RootState } from "./reducer";

const createStore = () => {
  return configureStore({
    reducer: reducer as Reducer<CombinedState<RootState>, AnyAction>,
    middleware: [createSagaMiddleware()],
    devTools: process.env.NODE_ENV !== "production",
  });
};

const store = createStore();

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(createStore, {
  debug: process.env.NODE_ENV !== "production",
});
