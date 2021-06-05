import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/spash_container';
import ProductShowContainer from './products/product_show_container';
import CartFormContainer from './cart/cart_form_container';
import Footer from './footer/footer';
import SearchBarContainer from './search/search_bar_container';
import SearchResult from './search/search_result';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link"><h1>Etchy</h1></Link>
      <SearchBarContainer />
      <NavBarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={SplashContainer}/>
      <Route exact path="/products/:productId" component={ProductShowContainer}/>
      <Route exact path="/results/*" component={SearchResult} />
      <ProtectedRoute exact path="/cart" component={CartFormContainer}/>
      <Route path="*" component={() => <div className="error-page">404 NOT FOUND</div>} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;