import React from 'react';
import {
  Route,
  ProtectedRoute,
  Switch,
  Link
} from 'react-router-dom';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/spash_container';
import ProductShowContainer from './products/product_show_container';
import Cart from './cart/cart_form';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link"><h1>Etchy</h1></Link>
      <form className="search-box">
        <input type="text" className="search-bar" readOnly value="Search bar coming soon!"/>
        <button className="search-button"></button>
      </form>
      <NavBarContainer />
      <Link to="/cart/:cartId" className="shopping-cart"><button className="shopping-cart-button"/></Link>
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <Route exact path="/products/:productId" component={ProductShowContainer}/>
      {/* <ProtectedRoute exact path="/users/:userId/cart" component={Cart}/> */}
      <Route path="*" component={() => "404 NOT FOUND "} />
    </Switch>
  </div>
);

export default App;