import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionButton = () => (
    <nav className="login">
      <button onClick={() => openModal('Login')}>Login</button>
    </nav>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
  );   

    return (currentUser ? personalGreeting() : sessionButton());
}

export default Greeting;