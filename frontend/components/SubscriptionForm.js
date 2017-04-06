import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateInput, addSubscription } from '../redux/actions';
import TextField from 'material-ui/TextField';

const SubscriptionForm = ({ emptySubscription }) => {
  return (
    <div>
    
    </div>
  );
};

// redux

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateInput,
    addSubscription,
  }, dispatch),
});

SubscriptionForm.propTypes = {
  emptySubscription: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapDispatchToProps,
)(SubscriptionForm);
