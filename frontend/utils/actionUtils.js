const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(name) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `${name}_${type}`);
  return res;
}

export default createRequestTypes;
