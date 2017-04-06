import createRequestTypes from '../utils/actionUtils';

export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS';
export function getSubscriptions() {
  return {
    type: GET_SUBSCRIPTIONS,
  };
}

export const FETCH_SUBSCRIPTIONS = createRequestTypes('FETCH_SUBSCRIPTIONS');
export const fetchSubscriptions = {
  request: () => ({
    type: FETCH_SUBSCRIPTIONS.REQUEST,
  }),
  success: subscriptions => ({
    type: FETCH_SUBSCRIPTIONS.SUCCESS,
    subscriptions,
  }),
  failure: error => ({
    type: FETCH_SUBSCRIPTIONS.ERROR,
    error,
  }),
};

export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export function addSubscription(subscription) {
  return {
    type: ADD_SUBSCRIPTION,
    subscription,
  };
}
