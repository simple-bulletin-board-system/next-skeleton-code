import { call, put, takeLatest } from "@redux-saga/core/effects";

import { actions as categoryActions } from ".";
import * as categoryAPI from "./api";

export function* findAllSaga() {
  try {
    const { data } = yield call(categoryAPI.findAll);
    yield put(categoryActions.successFindAll(data));
  } catch (error) {
    yield put(categoryActions.failFindAll());
  }
}

export function* categorySaga() {
  const { findAll } = categoryActions;
  yield takeLatest(findAll, findAllSaga);
}
