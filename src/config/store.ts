import {
  configureStore,
  ThunkAction,
  Action,
  CombinedState,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";

import reducer, { RootState } from "./reducer";
import saga from "./saga";

interface SagaStore extends Store {
  sagaTask?: Task;
}

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const config = configureStore({
    reducer: reducer as Reducer<CombinedState<RootState>, AnyAction>,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production",
  });

  (config as SagaStore).sagaTask = sagaMiddleware.run(saga);

  return config;
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
