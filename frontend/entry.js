import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './redux/store';

require('babel-polyfill');

injectTapEventPlugin();

const store = configureStore();

import Main from './components/Main';

const App = (
  <Provider store={store}>
    <Main />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  render(App, document.getElementById('root'));
});
