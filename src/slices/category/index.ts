import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import LoadingStatus from "@/constants/loading/status";
import { ICategory } from "@/models/category.model";

interface IReducerCategory extends ICategory {
  id: number;
}

export interface ICategoryState {
  postLoading: LoadingStatus | undefined;
  getLoading: LoadingStatus;
  categories: IReducerCategory[];
}

const initialState: ICategoryState = {
  postLoading: undefined,
  getLoading: LoadingStatus.PENDING,
  categories: [],
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    save: (state, _action: PayloadAction<ICategory>) => {
      state.postLoading = LoadingStatus.PENDING;
    },
    successSave: (state, action) => {
      state.postLoading = LoadingStatus.SUCCESS;
      state.categories = state.categories.concat(action.payload);
    },
    failSave: (state) => {
      state.postLoading = LoadingStatus.FAIL;
    },
    findAll: (state) => {
      state.getLoading = LoadingStatus.PENDING;
    },
    successFindAll: (state, action: PayloadAction<IReducerCategory[]>) => {
      state.getLoading = LoadingStatus.SUCCESS;
      state.categories = action.payload;
    },
    failFindAll: (state) => {
      state.getLoading = LoadingStatus.FAIL;
    },
    reset: () => initialState,
  },
});

const { reducer: categoryReducer } = slice;
export const { actions, name } = slice;
export default categoryReducer;
