import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  table: {
    borderRadius: '15px',
    padding: '25px',
    width: '500px',
  },
  tableBody: {
    // height: ''
  }
}

const SubscriptionsTable = ({
  subscriptions,
}) => {
  const rows = subscriptions.toJS();

  return (
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
  );
};

SubscriptionsTable.propTypes = {
  subscriptions: PropTypes.object,
};

export default SubscriptionsTable;
