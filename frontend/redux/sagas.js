import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions';
import Subscriptions from '../utils/subscriptions.service';

const SubscriptionsAPI = Subscriptions();

function* fetchSubscriptions() {
  yield put(actions.fetchSubscriptions.request());
  const response = yield call(SubscriptionsAPI.getAll);
  if (response.status === 200) {
    yield put(actions.fetchSubscriptions.success(response.data));
  } else {
    console.log('Problem fetching packages');
    yield put(actions.fetchSubscriptions.error());
  }
}

function* watchGetSubscriptions() {
  yield takeLatest(actions.GET_SUBSCRIPTIONS, fetchSubscriptions);
}

export default function* root() {
  yield [
    watchGetSubscriptions(),
  ];
}
