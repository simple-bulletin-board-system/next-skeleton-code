import { all, fork } from "redux-saga/effects";
import { categorySaga } from "@/slices/category/saga";

export default function* saga() {
  yield all([fork(categorySaga)]);
}
