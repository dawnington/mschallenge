import { Map, Record, List } from 'immutable';
import * as actions from './actions';

const EmptySubscription = new Record({
  name: '',
  amount: 0,
  date: '',
});

const initialState = new Map({
  subscriptions: new List(),
  emptySubscription: new EmptySubscription(),
});

function addSubscriptions(state, subscriptions) {
  return state.set('subscriptions', new List(subscriptions));
}

export default function reducer(state = initialState, action) {
  const reducers = {
    [actions.FETCH_SUBSCRIPTIONS.SUCCESS]: () => addSubscriptions(state, action.subscriptions),
    'DEFAULT': () => state,
  };

  return ((action && reducers[action.type]) ? reducers[action.type] : reducers['DEFAULT'])();
}
