import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import { ICategory } from "@/models/category.model";
import { actions as categoryActions } from ".";
import * as categoryAPI from "./api";

export function* saveSaga(action: PayloadAction<ICategory>) {
  try {
    const { payload } = action;
    const { data } = yield call(categoryAPI.save, payload);
    yield put(categoryActions.successSave(data));
  } catch (error) {
    yield put(categoryActions.failSave());
  }
}

export function* findAllSaga() {
  try {
    const { data } = yield call(categoryAPI.findAll);
    yield put(categoryActions.successFindAll(data));
  } catch (error) {
    yield put(categoryActions.failFindAll());
  }
}

export function* categorySaga() {
  const { save, findAll } = categoryActions;
  yield takeLatest(save, saveSaga);
  yield takeLatest(findAll, findAllSaga);
}
