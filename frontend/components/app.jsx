import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container'
import NavBarContainer from './nav_bar/nav_bar_container'

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link"><h1>Etchy</h1></Link>
      <NavBarContainer />
    </header>
    <GreetingContainer />
  </div>
);

export default App;