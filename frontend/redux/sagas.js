import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions';

function* fetchSubscriptions() {
  yield put(actions.fetchSubscriptions.request());
}

function* watchGetSubscriptions() {
  yield takeLatest(actions.GET_SUBSCRIPTIONS, fetchSubscriptions);
}

export default function* root() {
  yield [
    watchGetSubscriptions(),
  ];
}
