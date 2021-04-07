import React from 'react';

const Greeting = ({ currentUser }) => {
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Welcome back, {currentUser.username}!</h2>
    </div>
  );   

    return (currentUser ? personalGreeting() : null);
}

export default Greeting;