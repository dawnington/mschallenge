import getInstance from './axiosConfig';

export default function Subscriptions() {
  const url = '/subscriptions';

  return {
    getAll: () => getInstance()
      .get(url, {})
      .then(response => response)
      .catch(error => error.response),
    create: subscription => getInstance()
      .post(url, subscription)
      .then(response => response)
      .catch(error => error.response),
  };
}
