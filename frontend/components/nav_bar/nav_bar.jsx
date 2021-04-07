import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionButton = () => (
    <nav className="login">
      <button onClick={() => openModal('Login')}>Login</button>
    </nav>
  );

  const dropdown = () => (
    <nav className="dropdown">
      <button className="header-button" onClick={logout}>Log Out</button>
    </nav>
  );   

    return (currentUser ? dropdown() : sessionButton());
}

export default NavBar;