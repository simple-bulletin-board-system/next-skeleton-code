import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import LoadingStatus from "@/constants/loading/status";
import { ICategory } from "@/models/category.model";

interface IReducerCategory extends ICategory {
  id: number;
}

export interface ICategoryState {
  loading: LoadingStatus;
  categories: IReducerCategory[];
}

const initialState: ICategoryState = {
  loading: LoadingStatus.PENDING,
  categories: [],
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    findAll: (state) => {
      state.loading = LoadingStatus.PENDING;
    },
    successFindAll: (state, action: PayloadAction<IReducerCategory[]>) => {
      state.loading = LoadingStatus.SUCCESS;
      state.categories = action.payload;
    },
    failFindAll: (state) => {
      state.loading = LoadingStatus.FAIL;
    },
    reset: () => initialState,
  },
});

const { reducer: categoryReducer } = slice;
export const { actions, name } = slice;
export default categoryReducer;
