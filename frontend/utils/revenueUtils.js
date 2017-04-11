import _ from 'lodash';
import moment from 'moment';

export function currencyFormat(amount) {
  return `$${amount.toFixed(2)}`;
}

export function batchTotal(subscriptions) {
  const total = subscriptions
    .reduce((acc, sub) => {
      const amount = Number(sub.amount.replace(/[^0-9\.]+/g, ''));
      return acc + amount;
    }, 0);

  return total;
}

function currentMonth(subscription) {
  return moment(subscription.date).format('MM') === moment().format('MM');
}

function currentYear(subscription) {
  return moment(subscription.date).format('YYYY') === moment().format('YYYY');
}

function previousMonth(subscription) {
  return moment(subscription.date).format('MM') === moment().subtract(1, 'month').add(1, 'day').format('MM');
}

export function monthRevenue(subscriptions) {
  return currencyFormat(batchTotal(subscriptions.filter(subscription => currentMonth(subscription))));
}

export function yearToDate(subscriptions) {
  return currencyFormat(batchTotal(subscriptions.filter(subscription => currentYear(subscription))));
}

export function previousMonthTotal(subscriptions) {
  return currencyFormat(batchTotal(subscriptions.filter(subscription => previousMonth(subscription))));
}

export function lastMonths(filter) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonthIndex = parseInt(moment().format('M')) - 1; // 3
  const currentYear = [months[currentMonthIndex]];
  const lastYear = [];

  for (let i = currentMonthIndex - 1; i > currentMonthIndex - filter; i--) {
    if (i < 0) {
      lastYear.unshift(months[months.length + i]);
    } else {
      currentYear.unshift(months[i]);
    }
  }

  return [lastYear, currentYear];
}

export function getRevenueData(subscriptions, filter) {
  const months = lastMonths(filter);
  const groups = _.groupBy(subscriptions.toJS(), subscription => {
    return moment(subscription.date).format('YY MMMM');
  });
  const sums = _.mapValues(groups, batch => batchTotal(batch));
  const lastYear = moment().subtract(1, 'year').format('YY');
  const thisYear = moment().format('YY');
  const lastYearData = months[0].map(month => sums[`${lastYear} ${month}`] || 0);
  const thisYearData = months[1].map(month => sums[`${thisYear} ${month}`] || 0);
  const data = _.flatten([lastYearData, thisYearData]);

  return {
    labels: _.flatten(months),
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(14, 79, 206)",
        borderColor: "rgb(14, 79, 206)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgb(14, 79, 206)",
        pointBackgroundColor: "rgb(14, 79, 206)",
        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "rgb(14, 79, 206)",
        pointHoverBorderColor: "rgb(14, 79, 206)",
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data,
        spanGaps: false,
      }
    ]
  };
}
