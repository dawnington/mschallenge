import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Card from 'material-ui/Card';

const styles = {
  card: {
    borderRadius: '15px',
    width: '300px',
    height: '300px',
  },
  form: {
    margin: '20px',
  },
};

const SubscriptionForm = ({
  newSubscription,
  formErrors,
  updateInput,
  addSubscription,
}) => {
  const handleSubmit = () => {
    addSubscription(newSubscription);
  };

  return (
      <div style={styles.form}>
        <form onSubmit={handleSubmit}>
          <TextField
            floatingLabelText="Name"
            value={newSubscription.get('name')}
            errorText={formErrors.get('name')}
            onChange={(event, value) => updateInput('name', value)}
          />
          <TextField
            floatingLabelText="Amount"
            errorText={formErrors.get('amount')}
            value={newSubscription.get('amount')}
            onChange={(event, value) => updateInput('amount', value)}
          />
          <DatePicker
            hintText="Date"
            onChange={(event, value) => updateInput('date', value)}
          />
          <FloatingActionButton
            mini={true}
            onTouchTap={handleSubmit}
          >
            <ContentAdd />
          </FloatingActionButton>
        </form>
      </div>
  );
};

// redux

SubscriptionForm.propTypes = {
  newSubscription: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  updateInput: PropTypes.func.isRequired,
  addSubscription: PropTypes.func.isRequired,
};

export default connect()(SubscriptionForm);
