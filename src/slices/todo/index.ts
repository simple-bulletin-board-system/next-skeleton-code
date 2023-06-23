import { createSlice } from "@reduxjs/toolkit";
import LoadingStatus from "@/constants/loading/status";
import { ITodo } from "@/models/todo.model";

export interface ITodoState {
  loading: boolean;
  todos: ITodo[];
}

const initialState: ITodoState = {
  loading: false,
  todos: [],
};

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: { reset: () => initialState },
});

const { reducer: todoReducer } = slice;
export const { actions, name } = slice;
export default todoReducer;
