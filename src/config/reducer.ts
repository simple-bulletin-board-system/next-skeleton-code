import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import categoryReducer, {
  name as category,
  ICategoryState,
} from "@/slices/category";
import todoReducer, { name as todo, ITodoState } from "@/slices/todo";

export interface RootState {
  [category]: ICategoryState;
  [todo]: ITodoState;
}

const reducer = (
  state: RootState,
  action: AnyAction
): CombinedState<RootState> => {
  switch (action.type) {
    case HYDRATE:
      return Object.assign({}, state, action.payload);
    default: {
      const combinedReducer = combineReducers({
        [category]: categoryReducer,
        [todo]: todoReducer,
      });

      return combinedReducer(state, action);
    }
  }
};

export default reducer;
