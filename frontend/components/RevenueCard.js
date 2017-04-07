import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import Paper from 'material-ui/Paper';

import { currencyFormat, monthRevenue, yearToDate, totalMonthSubscriptions } from '../utils/revenueUtils';

const styles = {
  card: {
    height: '200px',
  },
  icon: {
    flexBasis: '30%',
    height: '100%',
    color: '#4ec71d',
  },
};

const RevenueCard = ({ subscriptions }) => {
  const monthTotal = currencyFormat(monthRevenue(subscriptions));
  const yearTotal = currencyFormat(yearToDate(subscriptions));
  const totalSubscriptions = totalMonthSubscriptions(subscriptions);
  const cardTitle = `${moment().format('MMMM')} Revenue`

  return (
    <Paper>
      <div className="revenue-card">
        <h3 className="revenue-card-title">Revenue Summary</h3>
        <div className="revenue-card-body">
          <div className="revenue-card-section">
            <ActionAccountBalance style={styles.icon} />
            <div>
              <h4 className="section-title">{cardTitle}</h4>
              <div className="revenue-number">
                {monthTotal}
              </div>
            </div>
          </div>
          <div className="revenue-card-section">
            <ActionTrendingUp style={styles.icon} />
            <div>
              <h4 className="section-title">Year To Date</h4>
              <div className="revenue-number">
                {yearTotal}
              </div>
            </div>
          </div>
          <div className="revenue-card-section">
            <ActionAccountCircle style={styles.icon} />
            <div>
              <h4 className="section-title">Total Month Subscriptions</h4>
              <div className="revenue-number">
                {totalSubscriptions}
              </div>
            </div>
          </div>
          <div className="revenue-card-section">
            <ActionAssessment style={styles.icon} />
            <div>
              <h4 className="section-title">Some other thing</h4>
              <div className="revenue-number">
                {monthTotal}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default connect()(RevenueCard);
