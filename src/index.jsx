import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import store from './store/store';

import PrimaryLayout from './components/PrimaryLayout';

class App extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <PrimaryLayout />
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
