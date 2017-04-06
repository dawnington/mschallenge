import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import SubscriptionsTable from './SubscriptionsTable';
import SubscriptionForm from './SubscriptionForm';

const Main = ({
  state,
  actions: {
    initializePage,
    getSubscriptions,
  },
}) => {
  if (!state.get('initialized')) {
    initializePage();
    getSubscriptions();
  }

  const subscriptions = state.get('subscriptions').toJS();
  const emptySubscription = state.get('emptySubscription').toJS();

  return (
    <div>
      <SubscriptionForm emptySubscription={emptySubscription} />
      <SubscriptionsTable subscriptions={subscriptions} />
    </div>
  );
};

// redux

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

Main.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
