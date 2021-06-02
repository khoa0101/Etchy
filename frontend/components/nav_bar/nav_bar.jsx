import React from 'react';
import CartNavContainer from '../cart/cart_nav_container';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionButton = () => (
    <nav className="login">
      <button onClick={() => openModal('Login')}>Sign in</button>
    </nav>
  );

  const dropdown = () => (
    <nav className="dropdown">
      <button className="header-button" onClick={logout}>Sign out</button>
    </nav>
  );   

    return (
      <div className="user-nav">
        {currentUser ? dropdown() : sessionButton()}
        <CartNavContainer />
      </div>
      );
}

export default NavBar;