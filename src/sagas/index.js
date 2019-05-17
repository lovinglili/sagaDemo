import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import *as homeAction from '../store/home/actionTypes'
import {api} from '../api'

export function* getUserList() {
    const userList = yield call(api.getUserList)
    yield put({
        type: 'GET_LIST_ASYNC_SUCCESS',
        payload: {list:userList},
    });
  }

  export function* watchGetUserList() {
    yield takeEvery(homeAction.GET_LIST_ASYNC, getUserList)
  }

  export default function* root() {
    yield all([fork(watchGetUserList)])
  }

