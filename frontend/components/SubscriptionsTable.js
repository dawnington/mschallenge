import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const SubscriptionsTable = ({
  subscriptions,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          subscriptions.map(sub => (
            <TableRow key={sub.name}>
              <TableRowColumn>{sub.name}</TableRowColumn>
              <TableRowColumn>{sub.amount}</TableRowColumn>
              <TableRowColumn>{sub.date}</TableRowColumn>
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
