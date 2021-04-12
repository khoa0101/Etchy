import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, HashRouter } from 'react-router-dom';
import App from './app'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App/>
      </Switch>
    </HashRouter>
  </Provider>
)

export default Root;