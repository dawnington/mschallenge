import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import RevenueCard from './RevenueCard';
import RevenueChart from './RevenueChart';
import SubscriptionsTable from './SubscriptionsTable';
import SubscriptionForm from './SubscriptionForm';

const Main = ({
  state,
  actions: {
    initializePage,
    getSubscriptions,
    updateInput,
    addSubscription,
  },
}) => {
  if (!state.get('initialized')) {
    initializePage();
    getSubscriptions();
  }

  const subscriptions = state.get('subscriptions');
  const newSubscription = state.get('newSubscription');
  const formErrors = state.get('formErrors');

  return (
    <div className="main">
      <RevenueCard subscriptions={subscriptions} />
      <RevenueChart subscriptions={subscriptions} />
      <SubscriptionsTable subscriptions={subscriptions} />
    </div>
  );
};

// <SubscriptionForm
//   newSubscription={newSubscription}
//   formErrors={formErrors}
//   updateInput={updateInput}
//   addSubscription={addSubscription}
// />

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
