import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import PrimaryLayout from './components/PrimaryLayout.jsx';

class App extends React.Component {
  render () {
    return(
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));
