import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/spash_container';
import ProductShowContainer from './products/product_show_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link"><h1>Etchy</h1></Link>
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <Route exact path="/products/:productId" component={ProductShowContainer}/> 
      <Route path="*" component={() => "404 NOT FOUND "} />
    </Switch>
  </div>
);

export default App;