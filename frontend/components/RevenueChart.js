import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

import { getRevenueData, currencyFormat } from '../utils/revenueUtils';

const styles = {
  paper: {
    marginTop: '20px',
  }
}

const RevenueChart = ({ subscriptions }) => {
  const data = getRevenueData(subscriptions);

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
      <h3 className="card-title">Revenue</h3>
      <div className="chart">
        <Line data={data} options={options} height={100} />
      </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
  subscriptions: state.get('subscriptions'),
});

RevenueChart.propTypes = {
  subscriptions: PropTypes.object,
};

export default connect(
  mapStateToProps
)(RevenueChart);
