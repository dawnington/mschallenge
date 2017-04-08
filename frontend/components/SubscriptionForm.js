import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

import { updateInput, addSubscription } from '../redux/actions';

const styles = {
  title: {
    paddingTop: '15px',
    paddingLeft: '15px',
    paddingBottom: '15px',
    marginBottom: '-20px',
    borderBottom: '1px solid #CDCFD4',
  },
  form: {
    margin: '10px'
  },
  textField: {
    width: '230px'
  },
  button: {
    border: '1px solid #CDCFD4',
    borderRadius: '5px',
  }
};

const SubscriptionForm = ({
  newSubscription,
  formErrors,
  actions: {
    updateInput,
    addSubscription,
  },
}) => {
  const handleSubmit = () => {
    addSubscription(newSubscription);
  };

  return (
    <div>
      <h3 style={styles.title}>New Subscription</h3>
      <div style={styles.form}>
        <form onSubmit={handleSubmit}>
          <TextField
            style={styles.textField}
            floatingLabelText="Name"
            value={newSubscription.get('name')}
            errorText={formErrors.get('name')}
            onChange={(event, value) => updateInput('name', value)}
            />
          <TextField
            style={styles.textField}
            floatingLabelText="Amount"
            errorText={formErrors.get('amount')}
            value={newSubscription.get('amount')}
            onChange={(event, value) => updateInput('amount', value)}
            />
          <DatePicker
            textFieldStyle={styles.textField}
            hintText="Date"
            container="inline"
            onChange={(event, value) => updateInput('date', value)}
            />
          <FlatButton
            label="Add Subscription"
            onTouchTap={handleSubmit}
            style={styles.button}
          />
        </form>
      </div>
    </div>
  );
};

// redux

const mapStateToProps = state => ({
  newSubscription: state.get('newSubscription'),
  formErrors: state.get('formErrors'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateInput,
    addSubscription,
  }, dispatch),
});


SubscriptionForm.propTypes = {
  newSubscription: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscriptionForm);
