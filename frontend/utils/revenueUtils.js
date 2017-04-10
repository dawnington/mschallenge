import _ from 'lodash';
import moment from 'moment';

export function currencyFormat(amount) {
  return `$${amount.toFixed(2)}`;
}

function batchTotal(subscriptions) {
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

function lastMonths(filter) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonthIndex = parseInt(moment().format('M')) - 1; // 3
  const sixMonths = [months[currentMonthIndex]];

  for (let i = currentMonthIndex - 1; i > currentMonthIndex - filter; i--) {
    if (i < 0) {
      sixMonths.unshift(months[months.length + i]);
    } else {
      sixMonths.unshift(months[i]);
    }
  }

  return sixMonths;
}

export function getRevenueData(subscriptions, filter) {
  const groups = _.groupBy(subscriptions.toJS(), subscription => {
    return moment(subscription.date).format('YY MM');
  });
  const sums = _.map(groups, batch => batchTotal(batch));
  let data = _.reverse(_.values(sums));
  while (data.length < filter) { data.unshift(0) }
  data = _.takeRight(data, filter);

  return {
    labels: lastMonths(filter),
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
