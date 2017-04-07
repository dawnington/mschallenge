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

export function monthRevenue(subscriptions) {
  return batchTotal(subscriptions.filter(subscription => currentMonth(subscription)));
}

export function yearToDate(subscriptions) {
  return batchTotal(subscriptions.filter(subscription => currentYear(subscription)));
}

export function totalMonthSubscriptions(subscriptions) {
  return subscriptions.filter(subscription => currentMonth(subscription)).size;
}

function lastSixMonths() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonthIndex = parseInt(moment().format('M')) - 1; // 3
  const sixMonths = [months[currentMonthIndex]];

  for (let i = currentMonthIndex - 1; i > currentMonthIndex - 6; i--) {
    if (i < 0) {
      sixMonths.unshift(months[months.length + i]);
    } else {
      sixMonths.unshift(months[i]);
    }
  }

  return sixMonths;
}

export function getRevenueData(subscriptions) {
  const groups = _.groupBy(subscriptions.toJS(), subscription => {
    return moment(subscription.date).format('MM');
  });
  const sums = _.map(groups, batch => batchTotal(batch));
  const data = _.reverse(_.values(sums));
  while (data.length < 6) { data.unshift(0) }

  return {
    labels: lastSixMonths(),
    datasets: [
      {
        // label: "",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data,
        spanGaps: false,
      }
    ]
  };
}
