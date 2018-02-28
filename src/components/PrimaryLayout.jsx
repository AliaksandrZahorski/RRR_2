import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './HomePage.jsx';
import UsersPage from './UsersPage.jsx';


import './PrimaryLayout.css';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/a" component={UsersPage} />
    </main>
  </div>
);

export default PrimaryLayout;
