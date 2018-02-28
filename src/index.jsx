import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './components/App';

class AppContainer extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

render(
  <AppContainer />
  , document.getElementById('app')
);
