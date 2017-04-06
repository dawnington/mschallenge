import React, { PropTypes } from 'react';
import moment from 'moment';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const SubscriptionsTable = ({
  subscriptions,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          subscriptions.map(sub => (
            <TableRow key={sub.name}>
              <TableRowColumn>{sub.id}</TableRowColumn>
              <TableRowColumn>{sub.name}</TableRowColumn>
              <TableRowColumn>{sub.amount}</TableRowColumn>
              <TableRowColumn>{moment(sub.date).format('MMMM Do YYYY')}</TableRowColumn>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

SubscriptionsTable.propTypes = {
  subscriptions: PropTypes.array,
};

export default SubscriptionsTable;
