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
    toggleForm,
  },
}) => {
  if (!state.get('initialized')) {
    initializePage();
    getSubscriptions();
  }

  const subscriptions = state.get('subscriptions');
  const newSubscription = state.get('newSubscription');
  const formErrors = state.get('formErrors');
  const formOpen = state.get('formOpen');
  const anchorEl = state.get('anchorEl');

  return (
    <div className="main">
      <RevenueCard subscriptions={subscriptions} />
      <RevenueChart subscriptions={subscriptions} />
      <SubscriptionsTable
        subscriptions={subscriptions}
        formOpen={formOpen}
        toggleForm={toggleForm}
        anchorEl={anchorEl}
      />
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
