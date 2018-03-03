import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import UsersPage from './UsersPage/UsersPage';

import './App.css';

const App = () => {
  return (
    <div className="primary-layout">
      <Header />
      <main>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={UsersPage} />
      </main>
    </div>
  );
}

export default App;
