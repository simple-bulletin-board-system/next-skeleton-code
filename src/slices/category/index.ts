import { createSlice } from "@reduxjs/toolkit";
import LoadingStatus from "@/constants/loading/status";
import { ICategory } from "@/models/category.model";

export interface ICategoryState {
  loading: boolean;
  categories: ICategory[];
}

const initialState: ICategoryState = {
  loading: false,
  categories: [],
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: { reset: () => initialState },
});

const { reducer: categoryReducer } = slice;
export const { actions, name } = slice;
export default categoryReducer;
