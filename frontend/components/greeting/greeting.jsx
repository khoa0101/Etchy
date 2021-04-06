import React from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';

class Greeting extends React.Component{
  render(){
    const { currentUser, logout } = this.props;
    const sessionLink = () => (
      <nav className="login">
        <Link to="/login">Sign In</Link>
      </nav>
    );

    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Welcome back, {curentUser.username}!</h2>
        <button className="header-link" onClick={logout}>Sign Out</button>
      </hgroup>
    );
    return currentUser ? personalGreeting() : sessionLink();
  }
}

export default Greeting;