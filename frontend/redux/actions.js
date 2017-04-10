import createRequestTypes from '../utils/actionUtils';

export const INITIALIZE_PAGE = 'INITIALIZE_PAGE';
export const initializePage = () => ({ type: INITIALIZE_PAGE });

export const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS';
export const getSubscriptions = () => ({ type: GET_SUBSCRIPTIONS });

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
    type: FETCH_SUBSCRIPTIONS.FAILURE,
    error,
  }),
};

export const TOGGLE_FORM = 'TOGGLE_FORM';
export const toggleForm = (el) => ({ type: TOGGLE_FORM, el });

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const updateInput = (field, value) => ({ type: UPDATE_INPUT, field, value });

export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const addSubscription = subscription => ({ type: ADD_SUBSCRIPTION, subscription });

export const POST_SUBSCRIPTION = createRequestTypes('POST_SUBSCRIPTION');
export const postSubscription = {
  request: subscription => ({
    type: POST_SUBSCRIPTION.REQUEST,
    subscription,
  }),
  success: subscription => ({
    type: POST_SUBSCRIPTION.SUCCESS,
    subscription,
  }),
  failure: errors => ({
    type: POST_SUBSCRIPTION.FAILURE,
    errors,
  }),
};
