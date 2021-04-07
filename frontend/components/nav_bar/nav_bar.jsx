import React from 'react';

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

    return (currentUser ? dropdown() : sessionButton());
}

export default NavBar;