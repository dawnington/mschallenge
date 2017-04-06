import { Map, Record, List } from 'immutable';
import moment from 'moment';
import * as actions from './actions';

const EmptySubscription = new Record({
  name: '',
  amount: '',
  date: moment().format(),
});

const initialState = new Map({
  initialized: false,
  subscriptions: new List(),
  newSubscription: new EmptySubscription(),
  formErrors: new EmptySubscription(),
});

function initializeState(state) {
  return state.set('initialized', true);
}

function loadSubscriptions(state, subscriptions) {
  return state.set('subscriptions', new List(subscriptions));
}

function addSubscription(state, subscription) {
  return state
    .set('subscriptions', state.get('subscriptions').push(subscription))
    .set('newSubscription', new EmptySubscription())
}

function updateForm(state, field, value) {
  return state.setIn(['newSubscription', field], value);
}

function addErrors(state, errors) {
  return state.set('formErrors', errors);
}

export default function reducer(state = initialState, action) {
  const reducers = {
    [actions.INITIALIZE_PAGE]               : () => initializeState(state),
    [actions.FETCH_SUBSCRIPTIONS.SUCCESS]   : () => loadSubscriptions(state, action.subscriptions),
    [actions.UPDATE_INPUT]                  : () => updateForm(state, action.field, action.value),
    [actions.POST_SUBSCRIPTION.SUCCESS]     : () => addSubscription(state, action.subscription),
    [actions.POST_SUBSCRIPTION.FAILURE]     : () => addErrors(state, action.errors),
    'DEFAULT'                               : () => state,
  };

  return ((action && reducers[action.type]) ? reducers[action.type] : reducers['DEFAULT'])();
}
