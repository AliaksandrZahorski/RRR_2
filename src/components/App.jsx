import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import HomePage from './HomePage';
import UsersPage from './UsersPage';

import './PrimaryLayout.css';

const handleLogin = event => {
  event.preventDefault();
  console.log(event.target.user.value, event.target.password.value);
}

const App = () => (
  <div className="primary-layout">
    <header>
      <Header login={handleLogin} />
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={UsersPage} />
    </main>
  </div>
);

export default App;
