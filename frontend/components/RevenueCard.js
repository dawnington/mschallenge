import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import Paper from 'material-ui/Paper';

import { monthRevenue, yearToDate, previousMonthTotal } from '../utils/revenueUtils';

const styles = {
  card: {
    height: '200px',
  },
  icon: {
    flexBasis: '30%',
    height: '100%',
    color: "#D4DEEB",
  },
};

const RevenueCard = ({ subscriptions }) => {
  const monthTotal = monthRevenue(subscriptions);
  const yearTotal = yearToDate(subscriptions);
  const lastMonthTotal = previousMonthTotal(subscriptions);
  const totalSubscriptions = subscriptions.size;
  const cardTitle = `${moment().format('MMMM')} Revenue`

  return (
    <Paper>
      <div className="revenue-card">
        <h3 className="card-title">Page Summary</h3>
        <div className="revenue-card-body">
          <div className="revenue-card-section">
            <ActionAccountBalance style={styles.icon} />
            <div className="section-body">
              <h4 className="section-title">{cardTitle}</h4>
              <div className="revenue-number">
                {monthTotal}
              </div>
            </div>
          </div>
          <div className="revenue-card-section">
            <ActionTrendingUp style={styles.icon} />
            <div className="section-body">
              <h4 className="section-title">Year To Date</h4>
              <div className="revenue-number">
                {yearTotal}
              </div>
            </div>
          </div>
          <div className="revenue-card-section">
            <ActionAccountCircle style={styles.icon} />
            <div className="section-body">
              <h4 className="section-title">Total Subscriptions</h4>
              <div className="revenue-number">
                {totalSubscriptions}
              </div>
            </div>
          </div>
          <div className="revenue-card-section">
            <ActionAssessment style={styles.icon} />
            <div className="section-body">
              <h4 className="section-title">Previous Month</h4>
              <div className="revenue-number">
                {lastMonthTotal}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default connect()(RevenueCard);
