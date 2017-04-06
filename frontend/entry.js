import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './redux/store';
import Main from './components/Main';

require('babel-polyfill');

injectTapEventPlugin();

const store = configureStore();


const App = (
  <Provider store={store}>
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  render(App, document.getElementById('root'));
});
