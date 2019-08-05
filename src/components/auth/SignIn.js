import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    document.getElementById('form').reset();
  };
  render() {
    return (
      <div className="container">
        <form className="white signIn-form" id="form" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 center">Login</h5>
          <div className="row input-container email">
            <i className="small material-icons col 2">mail</i>
            <div className="input-field email col s11">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                className="validate"
                required
              />
            </div>
          </div>
          <div className=" row input-container password">
            <i className="small material-icons col 2">fingerprint</i>
            <div className="input-field password col s11">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                className="validate"
                required
              />
            </div>
          </div>
          <div className="input-field login-buttons">
            <button className="btn pink waves-effect waves-light lighten-1 z-depth-0">Login</button>
            <Link to="/signUp" className="btn pink waves-effect waves-light lighten-1 z-depth-0">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
