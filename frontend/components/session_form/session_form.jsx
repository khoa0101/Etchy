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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    )
  }

  render(){
    const greetingMessage = () => {
      if (this.props.fromType === "Signup"){
        return (
          <div className="login-form-greeting">
            <h1 className="signup-header">Create your account</h1>
            <h2 classname="signup-header-message">Registration is easy</h2>
          </div>
        )
      } else {
        return (
          <div className="login-form-greeting">
            <h1 className="login-header">Sign In</h1>
          </div>
        )
      }
    }

    const inputSection = () => {
      if (this.props.formType === "Signup"){
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
          <button>Sign in</button>
        </div>
        )
      }
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {greetingMessage()}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <br/>
          {inputSection()}
        </form>
      </div>
    )
  }
};

export default SessionForm;