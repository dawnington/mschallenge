import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import ConcentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';

import SubscriptionForm from './SubscriptionForm';

const styles = {
  paper: {
    marginTop: '20px',
  },
  table: {
    height: '300px',
  },
  iconButton: {
    padding: '0px',
    width: '35px',
    height: '35px',
  },
  popover: {
    maxWidth: '250px',
  }
}

const SubscriptionsTable = ({
  subscriptions,
  formOpen,
  toggleForm,
  anchorEl,
}) => {
  const rows = subscriptions.toJS();

  const handleTouchTap = (event) => {
    event.preventDefault();
    toggleForm(event.currentTarget);
  };

  const handleRequestClose = () => {
    toggleForm();
  };

  return (
    <Paper style={styles.paper}>
      <h3 className="card-title">
        Subscriptions
        <IconButton
          style={styles.iconButton}
          onTouchTap={handleTouchTap}
        >
          <ConcentAddCircleOutline />
        </IconButton>
      </h3>
      <Popover
          open={formOpen}
          anchorEl={anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={handleRequestClose}
          animation={PopoverAnimationVertical}
          style={styles.popover}
        >
        <SubscriptionForm />
      </Popover>
      <div className="table">
        <Table selectable={false} style={styles.table}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              _.map(rows, sub => (
                <TableRow key={sub.name} selectable={false}>
                  <TableRowColumn>{sub.name}</TableRowColumn>
                  <TableRowColumn>{sub.amount}</TableRowColumn>
                  <TableRowColumn>{moment(sub.date).format('MMMM Do YYYY')}</TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

SubscriptionsTable.propTypes = {
  subscriptions: PropTypes.object,
};

export default SubscriptionsTable;
