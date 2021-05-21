import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  handleChange(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

  loginDemo(e) {
    e.preventDefault();
    const demo = Object.assign({ username: 'demo_1', email: 'demo@demo.com', password: 'demo123'})
    if (this.props.formType === "Signup"){
      this.props.login(demo).then(this.props.closeModal);
    }
    else {
      this.props.action(demo).then(this.props.closeModal);
    }
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    )
  }

  render(){
    const signup = "Signup";
    const greetingMessage = () => {
      if (this.props.formType === signup){
        return (
          <div className="signup-form-greeting">
            <h1 className="signup-header">Create your account</h1>
            <h2 className="signup-header-message">Registration is easy.</h2>
          </div>
        )
      } else {
        return (
          <div className="login-form-greeting">
            <h1 className="login-header">Sign In</h1>
            {this.props.otherForm}
          </div>
        )
      }
    };

    const inputSection = () => {
      if (this.props.formType === signup) {
        return (
          <div className="login-form">
            <label>Email address
              <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange('email')}
              />
            </label>
            <label>First name 
              <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
              />
            </label>
            <label>Password
              <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              />
            </label>
            <button>Register</button> 
          </div>
        )
      } else {
        return (
        <div className="login-form">
          <label>Email address
            <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange('email')}
            />
          </label>
          <label>Password
            <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            />
          </label>
          <button>Sign In</button>
        </div>
        )
      }
    };

    return (
      <div className="login-form-container">
        {greetingMessage()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          {inputSection()}
        </form>
        <button className="demo-login" onClick={this.loginDemo}>Demo User</button>
      </div>
    )
  };
};

export default SessionForm;