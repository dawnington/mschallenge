import { Map } from 'immutable';
import lodash from 'lodash'

export default function newSubscriptionValidator(newSubscription) {
  return new Map()
    .set('name', validateName(newSubscription.get('name')))
    .set('amount', validateAmount(newSubscription.get('amount')))
    // .set('date', validateDate(newSubscription.get('date')))
}

const validateName = (name) => {
  if (name == null || name.length === 0) {
    return 'Name is required';
  }
};

const validateAmount = (value) => {
  if (value === null) {
    return null;
  }

  const regex = /^\d+(?:\.\d{0,2})$/;
  if (!regex.test(value)) {
    return 'Invalid amount';
  }

  // const nValue = parseFloat(value);
  //
  // if (lodash.isNaN(nValue)) {
  //   return 'Number is required';
  // }
  //
  // if (nValue <= 0) {
  //   return 'Positive number required';
  // }
};
