import { Map, Record } from 'immutable';
import moment from 'moment';
import * as actions from './actions';

const EmptySubscription = new Record({
  name: '',
  amount: '',
  date: moment().format(),
});

const initialState = new Map({
  initialized: false,
  formOpen: false,
  anchorEl: null,
  chartFilter: 6,
  subscriptions: new Map(),
  newSubscription: new EmptySubscription(),
  formErrors: new EmptySubscription(),
});

function initializeState(state) {
  return state.set('initialized', true);
}

function loadSubscriptions(state, subscriptions) {
  let newSubscriptions = new Map({});
  subscriptions.forEach(subscription => {
    newSubscriptions = newSubscriptions.set(subscription.id, subscription);
  });
  return state
    .set('subscriptions', newSubscriptions)
    .set('newSubscription', new EmptySubscription())
    .set('formErrors', new EmptySubscription())
    .set('formOpen', false);
}

function toggleForm(state, el) {
  let updatedState = state
    .set('formOpen', !state.get('formOpen'))
    .set('newSubscription', new EmptySubscription())
    .set('formErrors', new EmptySubscription());

  if (el) { updatedState = updatedState.set('anchorEl', el) }

  return updatedState;
}

function updateForm(state, field, value) {
  return state.setIn(['newSubscription', field], value);
}

function addErrors(state, errors) {
  return state.set('formErrors', errors);
}

function changeFilter(state, filter) {
  return state.set('chartFilter', filter);
}

export default function reducer(state = initialState, action) {
  const reducers = {
    [actions.INITIALIZE_PAGE]               : () => initializeState(state),
    [actions.FETCH_SUBSCRIPTIONS.SUCCESS]   : () => loadSubscriptions(state, action.subscriptions),
    [actions.TOGGLE_FORM]                   : () => toggleForm(state, action.el),
    [actions.UPDATE_INPUT]                  : () => updateForm(state, action.field, action.value),
    [actions.POST_SUBSCRIPTION.FAILURE]     : () => addErrors(state, action.errors),
    [actions.CHANGE_FILTER]                  : () => changeFilter(state, action.filter),
    'DEFAULT'                               : () => state,
  };

  return ((action && reducers[action.type]) ? reducers[action.type] : reducers['DEFAULT'])();
}
