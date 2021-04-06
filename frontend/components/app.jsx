import React from 'react';
// import { Provider } from 'react-redux';
// import {
//   Route,
//   Redirect,
//   Switch,
//   Link,
//   HashRouter
// } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container'

const App = () => (
  <div>
    <Modal />
    <h1>Etchy</h1>
    <GreetingContainer />
  </div>
);

export default App;