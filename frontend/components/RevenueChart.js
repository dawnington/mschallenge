import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Line } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import { changeFilter } from '../redux/actions';
import { getRevenueData, currencyFormat } from '../utils/revenueUtils';

const styles = {
  paper: {
    marginTop: '20px',
  }
}

const RevenueChart = ({
  subscriptions,
  filter,
  actions: { changeFilter }
}) => {
  const data = getRevenueData(subscriptions, filter);

  const options = {
    fill: true,
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return currencyFormat(tooltipItem.yLabel);
        }
      },
      displayColors: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
         ticks: {
         }
       }],
      yAxes: [{
        gridLines: {
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          callback: function (value) { return currencyFormat(value); },
        },
      }]
    }
  }

  return (
    <Paper style={styles.paper}>
      <h3 className="card-title">
        Revenue
        <DropDownMenu value={filter} onChange={(e, i, v) => changeFilter(v)}>
          <MenuItem value={3} primaryText="3 Months" />
          <MenuItem value={6} primaryText="6 Months" />
          <MenuItem value={12} primaryText="Year to Date" />
        </DropDownMenu>
      </h3>
      <div className="chart">
        <Line data={data} options={options} height={100} />
      </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
  subscriptions: state.get('subscriptions'),
  filter: state.get('chartFilter'),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ changeFilter }, dispatch)
})

RevenueChart.propTypes = {
  subscriptions: PropTypes.object.isRequired,
  filter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RevenueChart);
