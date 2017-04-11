import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import lodash from 'lodash';
import * as actions from './actions';
import Subscriptions from '../utils/subscriptions.service';
import newSubscriptionValidator from '../utils/formValidator';

const SubscriptionsAPI = Subscriptions();

function* fetchSubscriptions() {
  yield put(actions.fetchSubscriptions.request());
  const response = yield call(SubscriptionsAPI.getAll);
  if (response.status === 200) {
    yield put(actions.fetchSubscriptions.success(response.data));
  } else {
    yield put(actions.fetchSubscriptions.failure(response.data));
  }
}

function* createSubscription({ subscription }) {
  const errors = yield call(newSubscriptionValidator, subscription);
  if (lodash.compact(errors.valueSeq().toJS()).length > 0) {
    yield put(actions.postSubscription.failure(errors));
  } else {
    const response = yield call(SubscriptionsAPI.create, subscription.toJS());
    if (response.status === 200) {
      yield put(actions.postSubscription.success(response.data));
      yield call(fetchSubscriptions);
    } else {
      yield put(actions.postSubscription.failure(response.data));
    }
  }
}

function* watchGetSubscriptions() {
  yield takeLatest(actions.GET_SUBSCRIPTIONS, fetchSubscriptions);
}

function* watchAddSubscription() {
  yield takeLatest(actions.ADD_SUBSCRIPTION, createSubscription);
}

export default function* root() {
  yield [
    watchGetSubscriptions(),
    watchAddSubscription(),
  ];
}
